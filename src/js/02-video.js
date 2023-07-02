import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const handleTimeUpdate = throttle(({ duration, seconds }) => {
  console.log(seconds);
  if (seconds === duration) {
    localStorage.setItem('videoplayer-current-time', 0);
  } else {
    localStorage.setItem('videoplayer-current-time', seconds);
  }
}, 1000);
player.on('timeupdate', handleTimeUpdate);

const currentTimeStemp = localStorage.getItem('videoplayer-current-time');
console.log(Number(currentTimeStemp));
player.setCurrentTime(Number(currentTimeStemp));
