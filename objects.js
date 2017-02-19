var enemies = [];
var spawnEnemy = function () {
    enemies.push (new Enemy(1070,Math.random()*(500-50),70,50,"",12,12));
}
var timeInterval = 80;

var player = new Player(10,250,200,121.2,"img/armadilloWalk1.png","img/armadilloWalk2.png","img/armadilloAttack1.png","img/armadilloAttack2.png",5);

var update = function () {
    ctx.clearRect(0,0,1000,500);
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].update();
        if (enemies[i].removeMark === true) {
            enemies.splice(i,1);
        }
    }
    player.update();
    
    ctx.fillStyle = "red";
    ctx.fillRect(10,10,30,30);
    ctx.fillRect(50,10,30,30);
    ctx.fillRect(90,10,30,30);
    ctx.fillRect(130,10,30,30);
    ctx.fillRect(170,10,30,30);
    ctx.fillRect(210,10,30,30);
    ctx.fillRect(250,10,30,30);
    ctx.fillRect(290,10,30,30);
    ctx.fillRect(330,10,30,30);
    ctx.fillRect(370,10,30,30);
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,2.9*Math.PI);
    ctx.stroke();
    
    ctx.textAlign = "center";
    ctx.font = "60px 'Muli'"
    ctx.fillStyle = "yellow";
    ctx.fillText("8",925,447);
    ctx.textAlign = "left";
    
    if (timeInterval === 0) {
        spawnEnemy();
        timeInterval = 80;
    } else {
        timeInterval--;
    }
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