import Player from '@vimeo/player';

class VimeoPlayer {
  /**
   * Creates a Player using the Vimeo video service.
   *
   * @constructor
   * @param {Node} container - an HTML element reference to contain the player
   * @param {string} url - a Vimeo video URL
   */
  constructor(container, url) {
    this.container = container;
    this.url = url;

    // Render the Vimeo player into the container
    this.player = new Player(this.container, {
      url: this.url,
      loop: false,
    });
  }

  /**
   * Gets the video's current playback position in seconds.
   *
   * @returns {Promise<number, Error>} promise
   */
  getCurrentTime() {
    return this.player.getCurrentTime();
  }
}

export default VimeoPlayer;
