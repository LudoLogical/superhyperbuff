var enemies = [];
var spawnEnemy = function () {
    enemies.push (new Enemy(Math.random()*500,Math.random()*500,15,15,"",12,12));
}

var myEntity = new Entity(10,250,10,10);

var update = function () {
    ctx.clearRect(0,0,500,500);
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].update();
    }
    myEntity.x += 20;
    myEntity.update();
}

spawnEnemy();
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