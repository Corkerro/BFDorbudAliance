// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.getElementById('hero_button').addEventListener('click', function () {
  var video = document.getElementById('hero_video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
