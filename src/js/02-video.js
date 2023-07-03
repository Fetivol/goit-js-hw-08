import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const handleTimeUpdate = throttle(({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);
player.on('timeupdate', handleTimeUpdate);

const currentTimeStemp = localStorage.getItem('videoplayer-current-time') || 0;
console.log(Number(currentTimeStemp));
player.setCurrentTime(Number(currentTimeStemp));
