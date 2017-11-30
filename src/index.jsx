import React from 'react';
import { render } from 'react-dom';

import getVideoPlatform from './lib/get-video-platform';

import VideoPlayer from './components/VideoPlayer';

const renderTarget = document.getElementById('root');

// TEMPORARY: video URL
const video = 'https://vimeo.com/215814095';

// Validate the provided URL and determine the video type
getVideoPlatform(video).then((platform) => {
  const videoPlayer = render(<VideoPlayer platform={platform} url={video} />, renderTarget);

  setInterval(() => {
    videoPlayer.getCurrentTime().then(time => console.log(time));
  }, 5000);
}).catch((err) => {
  // TODO: render an error to the user, if necessary
  console.error(err);
});
