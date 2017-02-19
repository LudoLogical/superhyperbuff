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
        if (sprite) {
            this.sprite = new Image();
            this.sprite.src = sprite;
        }
    }
    draw() {
        ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h); //x and y at centers of objs
    }
    update() {
        this.draw();
    }
}

//ENEMIES SETUP
class Enemy extends Entity {
    constructor(x,y,w,h,sprite0,sprite1,spd,dmg) {
        super(x,y,w,h);
        this.sprites = [new Image, new Image];
        this.sprites[0].src = sprite0;
        this.sprites[1].src = sprite1;
        this.spd = spd;
        this.dmg = dmg;
        this.removeMark = false;
        this.walkcycle = 10;
        this.walkid = 1;
    }
    updatePos() {
        this.x -= this.spd;
    }
    draw() {
        if (this.walkid === 1) {
            ctx.drawImage(this.sprites[0],this.x,this.y,this.w,this.h);
        } else {
            ctx.drawImage(this.sprites[1],this.x,this.y,this.w,this.h);
        }
    }
    
    spriteAnim() {
        if (this.walkcycle === 0) {
            if (this.walkid === 1) {
                this.walkid = 2;
            } else {
                this.walkid = 1;
            }
            this.walkcycle = 10;
        }
        this.walkcycle --;
    }
    update() {
        this.updatePos();
        this.spriteAnim();
        this.draw();
        if (this.x < -this.w) {
            this.removeMark = true;
        }
        if (player.smashing) {
            if (testcollisionrect(this,player,true)) {
                this.removeMark = true;
                score += this.dmg;
                if (this.dmg === 1) {
                    kills[0] ++;
                } else if (this.dmg === 2) {
                    kills[1] ++;
                } else if (this.dmg === 3) {
                    kills[2] ++;
                } else {
                    console.log("FATAL DAMAGE ASSOCIATION ERROR");
                }
                if ((kills[0] + kills[1] + kills[2])%20 === 0) {
                    player.isdeer = 200;
                    player.smashing = false;
                    player.atkcool = 40;
                    player.h = 200;
                }
                
            }
        } else if (testcollisionrect(this,player)) {
            if (player.isdeer <= 0) {
                player.hp -= this.dmg;
            }
            this.removeMark = true;
        }
    }
}

//BUILD ENEMIES
var spawnEnemy = function () {
    var selector = Math.random();
    if (selector < 0.33) {
        var src1 = "img/axolotl1.png";
        var src2 = "img/axolotl2.png";
        var dmg = 1;
        var w = 100;
        var h = 50;
        var spd = 10 + (difficulty/20);
    } else if (selector < 0.67) {
        var src1 = "img/wobbegong1.png";
        var src2 = "img/wobbegong2.png";
        var dmg = 2;
        var w = 100;
        var h = 50;
        var spd = 9 + (difficulty/20);
    } else {
        var src1 = "img/zebraDuiker1.png";
        var src2 = "img/zebraDuiker2.png";
        var dmg = 3;
        var w = 100;
        var h = 83.3;
        var spd = 8 + (difficulty/20);
    }
    enemies.push (new Enemy(1000+w,Math.random()*(500-h),w,h,src1,src2,spd,dmg));
}

//AMBIANCE SETUP
class Ambiance extends Entity {
    constructor(x,y,w,h,sprite,spd) {
        super(x,y,w,h,sprite);
        this.spd = spd;
        this.removeMark = false;
    }
    updatePos() {
        this.x -= this.spd;
    }
    draw() {
        ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
    }
    update() {
        this.updatePos();
        this.draw();
        if (this.x < -this.w) {
            this.removeMark = true;
        }
    }
}

//BUILD AMBIANCE
var spawnAmbiance = function () {
    var selector = Math.random();
    if (selector < 0.50) {
        var src = "img/star.png";
    } else if (selector < 0.75) {
        var src = "img/rainbow.png";
    } else if (selector < 0.875) {
        var src = "img/shell.png";
    } else {
        var src = "img/asteroid.png";
    }
    ambiances.push (new Ambiance(1000+30,Math.random()*(500-30),30,30,src,4));
}

//PLAYER SETUP
class Player extends Entity {
    constructor(x,y,w,h,sprite0,sprite1,sprite2,sprite3,sprite4,sprite5,spd) {
        super(x,y,w,h);
        this.sprites = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
        this.sprites[0].src = sprite0;
        this.sprites[1].src = sprite1;
        this.sprites[2].src = sprite2;
        this.sprites[3].src = sprite3;
        this.sprites[4].src = sprite4;
        this.sprites[5].src = sprite5;
        
        this.spd = spd;
        this.hp = 20;
        this.atkcool = 40;
        this.walkid = 1;
        this.walkcycle = 10;
        this.smashing = false;
        this.isdeer = 0;
    }
    updatePos() {
        if (!this.smashing) {
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
    }
    draw() {
        if (this.isdeer > 0) {
            if (this.walkid === 1) {
                ctx.drawImage(this.sprites[4],this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(this.sprites[5],this.x,this.y,this.w,this.h);
            }
        } else if (this.smashing) {
            if (this.walkid === 1) {
                ctx.drawImage(this.sprites[2],this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(this.sprites[3],this.x,this.y,this.w,this.h);
            }
        } else {
            if (this.walkid === 1) {
                ctx.drawImage(this.sprites[0],this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(this.sprites[1],this.x,this.y,this.w,this.h);
            }
        }
    }
    attack() {
        if (spacepress && this.atkcool >= 40) {
            this.smashing = true;
            this.walkid = 1;
            this.walkcycle = 5;
            this.atkcool = 0;
        }
    }
    spriteAnim() {
        if (this.walkcycle === 0) {
            if (this.walkid === 1) {
                this.walkid = 2;
            } else {
                this.walkid = 1;
            }
            this.walkcycle = 10;
        }
        this.walkcycle --;
    }
    update() {
        this.updatePos();
        this.spriteAnim();
        this.draw();
        
        if (this.isdeer === 1) {
            this.h = 121.2;
        }
        
        if (this.isdeer <= 0) {
            this.attack();

            if (this.atkcool < 40) {
                this.atkcool++;
            }
            if (this.atkcool >= 20) {
                this.smashing = false;
            } 
        } else {
            this.isdeer --;
        }
        
        if (testcollisionrect(this,heart)) {
            this.hp += 2;
            heart.x = -30;
            if (this.hp > 24) {
                this.hp = 24;
            }
        }
    }
}