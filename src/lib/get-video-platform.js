import { VError } from 'verror';

/**
 * Parses a URL to determine if it comes from a supported video platform, and
 * returns the platform's unique identifier if it is.
 *
 * @param {string} url - the URL to a video
 */
export default function getVideoPlatform(url) {
  return new Promise((resolve, reject) => {
    try {
      // Parse provided url into a URL object
      const videoURL = new URL(url);

      // Check that the URL is from supported video platform
      let platform;
      switch (videoURL.hostname) {
        case 'vimeo.com':
        case 'www.vimeo.com':
          platform = 'vimeo';
          break;
        default:
          platform = 'unsupported';
          break;
      }

      // Reject when the URL is not supported
      if (platform === 'unsupported') {
        return reject(new VError({
          name: 'UnsupportedPlatformError',
        }, 'url is not from a supported video platform'));
      }

      // Resolve when the URL is supported
      return resolve(platform);
    } catch (e) {
      // Reject when the provided url cannot be parsed as a valid URL
      return reject(new VError({
        name: 'InvalidURLError',
        cause: e,
        info: {
          url,
        },
      }, 'url must be a valid URL'));
    }
  });
}
