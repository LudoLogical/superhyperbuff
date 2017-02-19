var spawnEnemy = function () {
    enemies.push (new Enemy(1070,Math.random()*(500-50),100,50,"img/axolotl1.png","img/axolotl2.png",10,1));
}

var player = new Player(10,250,200,121.2,"img/armadilloWalk1.png","img/armadilloWalk2.png","img/armadilloAttack1.png","img/armadilloAttack2.png",3);

var update = function () {
    ctx.clearRect(0,0,1000,500);
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].update();
        if (enemies[i].removeMark === true) {
            enemies.splice(i,1);
        }
    }
    player.update();
    
    for (var i = 2; i <= player.hp; i += 2) {
        ctx.drawImage(hearts[1],(10+(40*(i/2))),10,30,30);
    }
    
    if (player.hp % 2 === 1) {
        ctx.drawImage(hearts[0],(50+(40*(Math.floor(player.hp/2)))),10,30,30);
    }
    
    var percent = (score%10)/10;
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,((percent*2)+1.5)*Math.PI);
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
    
    percent = (kills%20)/20;
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(800,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(800,425,50,1.5*Math.PI,((percent*2)+1.5)*Math.PI);
    ctx.stroke();
    
    ctx.textAlign = "center";
    ctx.font = "60px 'Muli'"
    ctx.fillStyle = "red";
    ctx.fillText(Math.floor(kills/20),800,447);
    ctx.textAlign = "left";
}

spawnEnemy();
setInterval(update,25);