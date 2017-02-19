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

var myEntity = new Entity(10,250,10,10);

var update = function () {
    ctx.clearRect(0,0,500,500);
    myEntity.x += 20;
    myEntity.update();
}

setInterval(update,25);

/*
ctx.fillStyle = "yellow";
ctx.fillRect(0,0,500,500);
ctx.fillStyle = "red";
ctx.font = "20px 'Muli'";
ctx.fillText("mytext",20,20);
ctx.drawImage(imageobj,x,y,w,h);

var myImage = new Image();
myImage.src = "img.png";

if (condition) {
    var x = y asdfasdf;
}

var x = function (condition) {

}

while () {
    asdfasdf;
}

for (var i = 0; i < 10; i++) {
    asdfasdfasdf;
}

true
false

console.log("text");
*/

//asdfasdf