//GET CANVAS CONTEXT (FOR MANIPULAITON)
var ctx = document.getElementById("ctx").getContext("2d");

//AREA SETUP (MOST SIMPLE TYPE)
class Area {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
}

//ENTITIES SETUP
class Entity extends Area {
    constructor(x,y,w,h,sprite) {
        super(x,y,w,h);
        this.sprite = new Image();
        this.sprite.src = sprite;
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x/2,this.y/2,this.w,this.h); //x and y at centers of objs
    }
    update() {
        this.draw();
    }
}

class Enemy extends Entity {
    constructor(x,y,w,h,sprite,spd,dmg) {
        super(x,y,w,h,sprite);
        this.spd = spd;
        this.dmg = dmg;
    }
    updatePos() {
        this.x -= this.spd;
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x/2,this.y/2,this.w,this.h); //x and y at centers of objs
    }
    update() {
        this.updatePos();
        this.draw();
    }
}