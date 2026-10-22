import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const CV_PATH = 'public/assets/cv.pdf'

/**
 * Exposes `__CV_AVAILABLE__` so the UI can decide whether to render the
 * `cat cv.pdf` button. The button is only emitted when the file actually
 * exists — no dead download links.
 */
function cvAssetPlugin() {
  return {
    name: 'cv-asset',
    config() {
      const available = existsSync(resolve(process.cwd(), CV_PATH))
      return {
        define: {
          __CV_AVAILABLE__: JSON.stringify(available),
        },
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Relative base keeps the build portable: it works from a GitHub Pages
  // project subpath (https://hadilsakani.github.io/Hadil/) and from the
  // local preview without a rebuild.
  base: './',
  build: {
    // Keep Vite's bundle out of `assets/`, which belongs to the published
    // CV (public/assets/cv.pdf).
    assetsDir: 'bundle',
  },
  plugins: [react(), cvAssetPlugin()],
})
