import throttle from "lodash.throttle";
import player from "@vimeo/player";

const iframe = document.querySelector('iframe');
console.log('iframe', iframe);
const player = new Vimeo.Player(iframe);
console.log('player', player);

// player.on('play', function () {
//   console.log('played the video!');
// });
