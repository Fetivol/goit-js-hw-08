import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const handleTimeUpdate = throttle(({ seconds }) => {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);
player.on('timeupdate', handleTimeUpdate);

const currentTimeStemp = localStorage.getItem('videoplayer-current-time');
console.log(Number(currentTimeStemp));
player
  .setCurrentTime(Number(currentTimeStemp))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        // some other error occurred
        break;
    }
  });
