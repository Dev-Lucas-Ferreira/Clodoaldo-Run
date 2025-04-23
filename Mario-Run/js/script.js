//variaveis do jogador
const player = document.getElementById('character');
let player_speed = 13;


//eixos
let positionX = 0;//E o chão e faz parte da gravidade
let positionY = 0;

//gravidade
let speedY = 0;
let gravity = 0.5;
let xrl8 = 0;
let deltaTime = 0.2;

function loadphysic(){
    const container = document.querySelector('.container');
    const ground = container.clientHeight - player.offsetHeight;
    //atualizando a velocidade e a posição Y
    speedY += gravity*deltaTime;
    positionY += speedY*deltaTime;

    if(positionY >= ground){
        positionY = ground;
        speedY = 0;
    }
    player.style.top = `${positionY}px`;
    console.log(`posiçãoY:${positionY}, SpeedY:${speedY}`);
}

//Função de movimento w,a,s,d FUNCIONANDO!!
document.addEventListener('keydown', function(event){

    //variaveis do evento
    const key = event.key;
    let cenarios = "";
    const img = document.getElementById('character')

    //teclas
    if (key === ' ' || key === 'w' || key === 'W') {
        const container = document.querySelector('.container');
        const ground = container.clientHeight - player.offsetHeight;
        if(positionY >= ground){
            speedY = -15;
        }
    } 
    if (key === 'a' || key === 'A') {
        positionX -= player_speed;
        player.src = "/Mario-Run/img/esquerda.png"
    } else if (key === 's' || key === 'S') {
        positionY += player_speed;
    } else if (key === 'd' || key === 'D') {
        positionX += player_speed;
        player.src = "/Mario-Run/img/direita.png"
    }

    //Cenarios
    if (key === '1') {
        cenarios = "url(/Mario-Run/img/cenario/cenario-temporariio.avif)"
    } else if (key === '2') {
        cenarios = "url(/Mario-Run/img/cenario/cenario2.png)"
    }
    if (cenarios) {
        document.body.style.background = cenarios;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }


    parede();
    //O chat fez para pegas a posição do player
    const rect = player.getBoundingClientRect();
    console.log(`Posição X: ${rect.x}, Posição Y: ${rect.y}`);
})

//demorei mas consegui fazer a maior parte sozinho ultilizei o chat para me explicar as funções e me dizer os erros 
//re-fiz essa merda mais de 23 vezes HAAAAAAAAAAAAAAAAAAAAAA :)

//colisão
function parede() {
    //altura e largura do player e do container
    const container = document.querySelector('.container');
    const playerX = player.offsetWidth;
    const playerY = player.offsetHeight;
    const maxX = container.clientWidth - playerX;
    const maxY = container.clientHeight - playerY;

    if (positionX < 0) {
        positionX = 0;
    } else if (positionX > maxX) {
        positionX = maxX;
    }

    if (positionY < 0) {
        positionY = 0;
    } else if (positionY > maxY) {
        positionY = maxY;
    }

    player.style.left = `${positionX}px`;
    player.style.top = `${positionY}px`;
}
//decide onde o personagem vai aparecer
function spawn_do_personagem() {
    const spawX = window.innerWidth;
    const spawY = window.innerHeight;

    positionX = (spawX - player.offsetWidth) / 2;
    positionY = (spawY - player.offsetHeight) / 1.2;

    player.style.left = `${positionX}px`;
    player.style.top = `${positionY}px`;
}
window.onload = spawn_do_personagem;
setInterval(loadphysic);



