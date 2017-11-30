import { hasCauseWithName } from 'verror';

import subject from '../get-video-platform';

describe('getVideoPlatform', () => {
  describe('when the url argument is not a valid URL', () => {
    it('should reject with an InvalidURLError', () => {
      expect.assertions(1);
      const url = 42;
      const expectedErrorName = 'InvalidURLError';

      return subject(url).catch((err) => {
        expect(hasCauseWithName(err, expectedErrorName)).toBeTruthy();
      });
    });
  });

  describe('when the url is for an unsupported platform', () => {
    it('should reject with an UnsupportedPlatformError', () => {
      expect.assertions(1);
      const url = 'https://www.fhqwhgads.com/';
      const expectedErrorName = 'UnsupportedPlatformError';

      return subject(url).catch((err) => {
        expect(hasCauseWithName(err, expectedErrorName)).toBeTruthy();
      });
    });
  });

  describe('when the url is for the Vimeo platform', () => {
    it('should resolve with vimeo', () => {
      expect.assertions(1);
      const url = 'https://vimeo.com/fhqwhgads';
      const expected = 'vimeo';

      return subject(url).then((result) => {
        expect(result).toBe(expected);
      });
    });
  });
});
