import React from 'react';
import { render } from 'react-dom';

import getVideoPlatform from './lib/get-video-platform';

const renderTarget = document.getElementById('root');

// TEMPORARY: video URL
const video = 'https://vimeo.com/215814095';

// Validate the provided URL and determine the video type
getVideoPlatform(video).then((platform) => {
  console.log(platform);
}).catch((err) => {
  // TODO: render an error to the user, if necessary
  console.error(err);
});

render(<div>Transcript</div>, renderTarget);
