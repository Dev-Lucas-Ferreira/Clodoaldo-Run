export default class camera{
    constructor(width,height,worldwidth,worldheighth){
        //largura e altura da camera
        this.width = width;
        this.height = height;

        //tamanho total do mundo
        this.worldwidth = worldwidth;
        this.worldheighth = worldheighth;
        
        //posição da camera
        this.x = 0;
        this.y = 0;

        this.smootFactor = 0.1;
    }

    //segue o jogador
    follow(target){
        //calcula a posição perfeira da camera
        const targetX = target.positionX - this.width /2 + target.width /2;

        //move suavemente a camera
        yhis.x += (targetX - this.x)*this.smootFactor

        //limita a camera
        this.x = Math.max(0, Math.min(this.x, this.worldWidth - this.width));
    }

    apply(ctx){
        ctx.save();
        ctx.translate(-this.x,0)
    }
}