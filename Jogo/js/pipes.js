export default class Pipe {
    constructor(width, height) {
      this.element = document.getElementById("pipe");
      this.width = width;
      this.height = height;
  
      this.positionX = 1500;
      this.positionY = 1000;
      this.speedY = 0;
      this.onground = false;
    }
  
pipe_collision(player) {
  const pipeRect = this.element.getBoundingClientRect();
  const playerRect = player.element.getBoundingClientRect();

  const collision =
    pipeRect.left < playerRect.right &&
    pipeRect.right > playerRect.left &&
    pipeRect.top < playerRect.bottom &&
    pipeRect.bottom > playerRect.top;

  if (collision) {
    // Colisão por cima
    if (
      player.positionY + player.height > this.positionY &&
      player.positionY < this.positionY
    ) {
      player.positionY = this.positionY - player.height;
      player.speedY = 0;
      player.onground = true;
    }

    // Colisão pela esquerda ou direita
    else if (player.positionX < this.positionX) {
      player.positionX = this.positionX - player.width;
    } else {
      player.positionX = this.positionX + this.width;
    }
  }
}

    update(player) {
      this.pipe_collision(player);
    }
  }
  
  //não terminei e não tive paciencia para terminar 