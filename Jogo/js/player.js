export default class Player {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.element = document.getElementById("character");

    this.player_speed = 10;

    this.positionX = 0;
    this.positionY = 0;
    this.speedY = 0;
    this.gravity = 0.9;
    this.deltaTime = 0.4;
    this.onground = false;

    this.keys_list = {
      w: false,
      a: false,
      s: false,
      d: false,
      ArrowUp: false,
      ArrowLeft: false,
      ArrowDown: false,
      ArrowRight: false,
    };

    this.player_press();
    this.spawn();
  }

  player_press() {
    document.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      if (key in this.keys_list) this.keys_list[key] = true;
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();
      if (key in this.keys_list) this.keys_list[key] = false;
    });
  }

  player_move() {
    if ((this.keys_list.w || this.keys_list.ArrowUp) && this.onground) {
      this.speedY = -20; // pulo
      this.onground = false;
    }

    if (this.keys_list.a || this.keys_list.ArrowLeft) {
      this.positionX -= this.player_speed;
    }

    if (this.keys_list.d || this.keys_list.ArrowRight) {
      this.positionX += this.player_speed;
    }
  }

  spawn() {
    const container = document.querySelector(".container");

    this.positionX = 10;
    this.positionY = container.clientHeight - 100 - this.height;

    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }

  collision() {
    const container = document.querySelector(".container");

    const maxX = container.clientWidth - this.width;
    const maxY = container.clientHeight - 100 - this.height;


    if (this.positionX < 0) this.positionX = 0;
    if (this.positionX > maxX) this.positionX = maxX;
    if (this.positionY > maxY) {
      this.positionY = maxY;
      this.speedY = 0;
      this.onground = true;
    }

    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }

  physical() {
    this.speedY += this.gravity * this.deltaTime;
    this.positionY += this.speedY * this.deltaTime;
  }

  //animação de andar e pular
  animation() {
    const frameWidth = 32;
    const totalFrames = 3;
    let currentFrame = 0;
  }

  update() {
    this.player_move();
    this.physical();
    this.collision();
  }
}
