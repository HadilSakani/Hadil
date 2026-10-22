/* global __CV_AVAILABLE__ */

/**
 * True when `public/assets/cv.pdf` exists at build time.
 * Vite replaces `__CV_AVAILABLE__` with a literal boolean during the build.
 */
export const cvAvailable = typeof __CV_AVAILABLE__ !== 'undefined' ? __CV_AVAILABLE__ : false

/**
 * Relative to the deployment base, so the link resolves both at
 * https://hadilsakani.github.io/Hadil/ and from a local preview.
 */
export const CV_PATH = `${import.meta.env.BASE_URL}assets/cv.pdf`
