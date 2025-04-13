//variaveis do jogador
const player = document.getElementById('character');
let player_speed = 10;

//eixos
let positionX = 0;
let positionY = 0;
const container = document.getElementsByClassName('container');

function area_limite(newX, newY) {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offseHeight;
    const playerWidth = player.offsetWidth;
    const playerHeight = player.offHeight;

    if (newX < 0 || newX > containerWidth - playerWidth || newY < 0 || newY > containerheight - playerHeight) {
        return false;
    } return true;
}

//Finalmete essa disgraça de botão funcionou 
document.addEventListener('keydown', function (event) {
    const key = event.key;
    let newX = positionX;
    let newY = positionY;

    //as funções de cada tecla de movimento w,a,s,d.
    if (key === 'w' || key === 'W') {
        newY -= player_speed;
    } else if (key === 'a' || key === 'A') {
        newX -= player_speed;
    } else if (key === 's' || key === 'S') {
        newY += player_speed;
    } else if (key === 'd' || key === 'D') {
        newX += player_speed;
    }

    if (area_limite(newX, newY)) {
        positionX = newX;
        positionY = newY;
    }

    player.style.transform = `translate(${positionX}px, ${positionY}px)`;
})


//dia 12/04 eu to mechendo nessa disgraça desde o momento em que acorder nesse momento tem que corrigir esse codigo
//tentar arrumar a area limite e fazer as animações de  pulo e corrida junto com os sprites
//ultilize a ia apenas para me auxiliar na logica e no aprendizado 