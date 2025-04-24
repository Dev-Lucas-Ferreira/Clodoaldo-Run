import Plataform from './plataforms.js';
import Player from './player.js';

const canvas = document.getElementById('gamecanvas');
const ctx = canvas.getContext("2d");
export { canvas, ctx };
canvas.width = 5000;
canvas.height = 650;

// Cria o player e a camera
const player = new Player(50, 50);
//todas as plataformas flutuantes
const plataforms = [
  new Plataform(600, 400, 120, 25, 'red'),
  new Plataform(740, 300, 120, 25, 'red'),
  new Plataform(1240, 250, 120, 25, 'red'),
  new Plataform(940, 200, 120, 25, 'red'),
  new Plataform(1040, 400, 120, 25, 'red'),
  new Plataform(1400, 350, 120, 25, 'red'),
  new Plataform(1600, 270, 120, 25, 'red'),
  new Plataform(1800, 320, 120, 25, 'red'),
  new Plataform(2000, 250, 120, 25, 'red'),
  new Plataform(2200, 300, 120, 25, 'red'),
  new Plataform(2400, 200, 120, 25, 'red'),
  new Plataform(2600, 280, 120, 25, 'red'),
  new Plataform(2800, 350, 120, 25, 'red'),
  new Plataform(3000, 270, 120, 25, 'red'),
  new Plataform(3200, 240, 120, 25, 'red'),
  new Plataform(3400, 300, 120, 25, 'red'),
  new Plataform(3600, 350, 120, 25, 'red'),
];

//as plataformas estão junto ao player
player.plataforms = plataforms;

// Loop do jogo
function gameloop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  // Desenha todas as plataformas
  plataforms.forEach(platform => platform.draw());
  
  requestAnimationFrame(gameloop);
}

gameloop();
