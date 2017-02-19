var spawnEnemy = function () {
    enemies.push (new Enemy(1070,Math.random()*(500-50),100,50,"img/axolotl1.png","img/axolotl2.png",10,12));
}

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
    
    ctx.drawImage(hearts[1],10,10,30,30);
    ctx.drawImage(hearts[1],50,10,30,30);
    ctx.drawImage(hearts[1],90,10,30,30);
    ctx.drawImage(hearts[1],130,10,30,30);
    ctx.drawImage(hearts[1],170,10,30,30);
    ctx.drawImage(hearts[1],210,10,30,30);
    ctx.drawImage(hearts[1],250,10,30,30);
    ctx.drawImage(hearts[1],290,10,30,30);
    ctx.drawImage(hearts[1],330,10,30,30);
    ctx.drawImage(hearts[1],370,10,30,30);
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,2.9*Math.PI);
    ctx.stroke();
    
    ctx.textAlign = "center";
    ctx.font = "60px 'Muli'"
    ctx.fillStyle = "yellow";
    ctx.fillText(Math.floor(score/10),925,447);
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