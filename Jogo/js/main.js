import Player from './player.js';

const player = new Player(50, 50);

function gameloop() {
  player.update();
  requestAnimationFrame(gameloop);
}

gameloop();
