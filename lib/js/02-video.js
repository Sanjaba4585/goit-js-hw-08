"use strict";

var _player = _interopRequireDefault(require("@vimeo/player"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new _player.default(iframe);
player.on('timeupdate', throttle(_ref => {
  let {
    seconds
  } = _ref;
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));
const time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(time || 0.1).then(function () {
  // seconds = the actual time that the player seeked to
}).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;
    default:
      // some other error occurred
      break;
  }
});