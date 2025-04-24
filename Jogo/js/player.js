export default class Player {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.element = document.getElementById("character");
    
    // As plataformas serão definidas depois na main.js
    this.plataforms = [];

    this.player_speed = 5;

    this.positionX = 0;
    this.positionY = 0;
    this.speedY = 0;
    this.gravity = 1;
    this.deltaTime = 0.4;
    this.onground = false;

    this.keys_list = {
      w: false,
      a: false,
      s: false,
      d: false,
      arrowup: false,
      arrowleft: false,
      arrowdown: false,
      arrowright: false,
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
    if (this.keys_list.w || this.keys_list.arrowup) {
      if (this.onground) {
        this.speedY = -20; // pulo
        this.onground = false;
      }
    }

    if (this.keys_list.a || this.keys_list.arrowleft) {
      console.log("Movendo para esquerda");
      this.positionX -= this.player_speed;
      this.element.src = "/Jogo/img/player/clodoaldo-esquerda.png";
    }

    if (this.keys_list.d || this.keys_list.arrowright) {
      this.positionX += this.player_speed;
      this.element.src = "/Jogo/img/player/clodoaldo-direita.png";
    }
  }

  spawn() {
    const container = document.querySelector(".container");

    this.positionX = 10;
    this.positionY = container.clientHeight - 100 - this.height;

    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }

  collision_plataforms() {
    this.onground = false;

    for (let p of this.plataforms) {
      let up_plataform =
        this.positionY + this.height >= p.y &&
        this.positionY + this.height <= p.y + 10 &&
        this.positionX + this.width > p.x &&
        this.positionX < p.x + p.width &&
        this.speedY >= 0;
      
      if (up_plataform) {
        this.positionY = p.y - this.height;
        this.speedY = 0;
        this.onground = true;
      }
    }
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

  draw() {
    ctx.fillStyle = "gray";
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  update() {
    this.player_move();
    this.physical();
    this.collision_plataforms();
    this.collision();
  }
}