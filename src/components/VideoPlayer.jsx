import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VimeoPlayer from '../players/VimeoPlayer';

const propTypes = {
  /* The video platform */
  platform: PropTypes.string.isRequired,
  /* The URL of the video */
  url: PropTypes.string.isRequired,
};

/**
 * A component that renders a video player.
 *
 * @class
 */
class VideoPlayer extends Component {
  componentDidMount() {
    const {
      platform,
      url,
    } = this.props;

    switch (platform) {
      case 'vimeo':
        this.player = new VimeoPlayer(this.container, url);
        break;
      default:
        // TODO: decide what to do if platform isn't vimeo...
        break;
    }
  }

  /**
   * Gets the current timestamp from the video player.
   *
   * @returns {Promise}
   */
  getCurrentTime() {
    return this.player.getCurrentTime();
  }

  /**
   * Render a video player. The player used depends on the platform of the
   * specified video.
   */
  render() {
    return (
      <div className="trans-VideoPlayer">
        <div
          className="trans-VideoPlayer-container"
          ref={(node) => {
            // Save a reference to this node for the player to use
            this.container = node;
          }}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = propTypes;

export default VideoPlayer;
