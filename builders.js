//GET CANVAS CONTEXT (FOR MANIPULAITON)
var ctx = document.getElementById("ctx").getContext("2d");

//GENERAL VARS
var wpress = false;
var apress = false;
var spress = false;
var dpress = false;

//DOCUMENT FUNCTIONS SETUP
document.onkeydown = function (e) {
    switch(e.keyCode) {
        case 87: //w
            wpress = true;
            break;
        case 65: //a
            apress = true;
            break;
        case 83: //s
            spress = true;
            break;
        case 68: //d
            dpress = true;
            break;
        default: break;
    }
};

//MOVE VAR RESET
document.onkeyup = function (e) {
    switch(e.keyCode) {
        case 87: //w
            wpress = false;
            break;
        case 65: //a
            apress = false;
            break;
        case 83: //s
            spress = false;
            break;
        case 68: //d
            dpress = false;
            break;
        default: break;
    }
};

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
        ctx.fillRect(this.x,this.y,this.w,this.h); //x and y at centers of objs
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
        this.removeMark = false;
    }
    updatePos() {
        this.x -= this.spd;
    }
    update() {
        this.updatePos();
        this.draw();
        if (this.x < -this.w) {
            this.removeMark = true;
        }
        if (testcollisionrect(this,player)) {
            player.hp -= this.dmg;
            this.removeMark = true;
        }
    }
}

class Player extends Entity {
    constructor(x,y,w,h,sprite,spd) {
        super(x,y,w,h,sprite);
        this.spd = spd;
        this.hp = 20;
        this.atkcool = 20;
    }
    updatePos() {
        if (wpress && this.y > 0) {
            this.y -= this.spd;
        }
        if (apress && this.x > 0) {
            this.x -= this.spd;
        }
        if (spress && this.y + this.h < 500) {
            this.y += this.spd;
        }
        if (dpress && this.x + this.w < 1000) {
            this.x += this.spd;
        }
    }
    update() {
        this.updatePos();
        this.draw();
        if (this.atkcool < 20) {
            this.atkcool++;
        }
    }
    attack() {
        if (spacepress && this.atkcool >= 20) {
            this.atkcool = 0;
        }
    }
}

var testcollisionrect = function(a,b) {
    return a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.h + a.y > b.y;
};