//BUILD HEART
var heart = new Entity(-30,Math.random()*(500-30),30,30,"img/heartbubble.png");
heart.updatePos = function() {
    heart.x -= 8;
}
heart.update = function() {
    this.updatePos();
    this.draw();
}

//BUILD OCTOPUS
var octopus = new Enemy(850,1000,200,200,"img/octopus1.png","img/octopus2.png",20,0);
octopus.updatePos = function () {
    this.y += this.spd;
}

//BUILD PLAYER
var player = new Player(10,250,200,121.2,"img/armadilloWalk1.png","img/armadilloWalk2.png","img/armadilloAttack1.png","img/armadilloAttack2.png","img/deer1.png","img/deer2.png",3);

//BUILD EXTRA ART ASSETS
var hearts = [new Image, new Image, new Image];
hearts[0].src = "img/halfheart.png";
hearts[1].src = "img/fullheart.png";
hearts[2].src = "img/heartbubble.png";
var bg = new Image();
bg.src = "img/bg.png";
var deersplash = new Image();
deersplash.src = "img/deersplash.png";
var octosplash = new Image();
octosplash.src = "img/octopus1.png";