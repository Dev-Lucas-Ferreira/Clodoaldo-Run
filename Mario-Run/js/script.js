//variaveis do jogador
const player = document.getElementById('character');
let player_speed = 100;

//eixos
let positionX = 0;
let positionY = 0;

//Função de movimento w,a,s,d FUNCIONANDO!!
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const img = document.getElementById('character')

    if (key === 'w' || key === 'W') {
        positionY -= player_speed;
    } else if (key === 'a' || key === 'A') {
        positionX -= player_speed;
        
    } else if (key === 's' || key === 'S') {
        positionY += player_speed;
    } else if (key === 'd' || key === 'D') {
        positionX += player_speed;
      
    }
    parede();


    //fiz o chat fazer essa para pegar as cordenadas "alterar depois pois pode bugar"
    const rect = player.getBoundingClientRect();
    console.log(`Posição X: ${rect.x}, Posição Y: ${rect.y}`);
})

//demorei mas consegui fazer a maior parte sozinho ultilizei o chat para me explicar as funções e me dizer os erros 
//re-fiz essa merda mais de 23 vezes HAAAAAAAAAAAAAAAAAAAAAA :)
function parede(){
    //altura e largura do player e do container
    const container = document.querySelector('.container');
    const playerX = player.offsetWidth;
    const playerY = player.offsetHeight;
    const maxX = container.clientWidth - playerX;
    const maxY = container.clientHeight - playerY;

    if(positionX < 0){
        positionX = 0;
    }else if(positionX > maxX){
        positionX = maxX;
    }

    if(positionY < 0){
        positionY = 0;
    }else if(positionY > maxY){
        positionY = maxY;
    }

    player.style.left = `${positionX}px`;
    player.style.top = `${positionY}px`; 
}

function spawn_do_personagem(){
    const spawX = window.innerWidth;
    const spawY = window.innerHeight;

    positionX = (spawX - player.offsetWidth)/2;
    positionY = (spawY - player.offsetHeight)/1.2;

    player.style.left = `${positionX}px`;
    player.style.top = `${positionY}px`; 
}
window.onload = spawn_do_personagem;