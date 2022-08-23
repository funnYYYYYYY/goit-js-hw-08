import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
player.on('play', function () {
  console.log('played the video!');
});

player.on('play', throttle(currentSecond, 1000));

let parseTime = 0;

function currentSecond(currentSecondNow) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentSecondNow.seconds)
  );
  saveCurrentTime();
}

function saveCurrentTime() {
  const onActiveSecond = localStorage.getItem('videoplayer-current-time');
  const onSavedActiveSecond = JSON.parse(onActiveSecond);

  if (onActiveSecond) {
    return (parseTime = onSavedActiveSecond);
  } else return parseTime;
}

player
  .setCurrentTime(saveCurrentTime())
  .then(function (seconds) {
    seconds = parseTime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
