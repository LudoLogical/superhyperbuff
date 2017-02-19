var update = function () {
    ctx.clearRect(0,0,1000,500);
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].update();
        if (enemies[i].removeMark === true) {
            enemies.splice(i,1);
        }
    }
    heart.update();
    player.update();
    
    for (var i = 2; i <= player.hp; i += 2) {
        ctx.drawImage(hearts[1],(10+(40*((i/2)-1))),10,30,30);
    }
    
    if (player.hp % 2 === 1) {
        ctx.drawImage(hearts[0],(50+(40*((Math.floor(player.hp/2))-1))),10,30,30);
    }
    
    var percent = (kills%20)/20;
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(675,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(675,425,50,1.5*Math.PI,((percent*2)+1.5)*Math.PI);
    ctx.stroke();
    
    ctx.textAlign = "center";
    ctx.font = "60px 'Muli'"
    ctx.fillStyle = "red";
    ctx.fillText(Math.floor(kills/20),675,447);
    ctx.textAlign = "left";
    
    percent = (score%10)/10;
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(800,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.arc(800,425,50,1.5*Math.PI,((percent*2)+1.5)*Math.PI);
    ctx.stroke();
    
    ctx.textAlign = "center";
    ctx.font = "60px 'Muli'"
    ctx.fillStyle = "yellow";
    ctx.fillText(Math.floor(score/10),800,447);
    ctx.textAlign = "left";
    
    var timeNow = (Date.now()-timeStart)/1000;
    percent = (timeNow%60)/60;
    
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,3.5*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(925,425,50,1.5*Math.PI,((percent*2)+1.5)*Math.PI);
    ctx.stroke();
    
    ctx.textAlign = "center";
    ctx.font = "60px 'Muli'"
    ctx.fillStyle = "green";
    ctx.fillText(Math.floor(timeNow/60),925,447);
    ctx.textAlign = "left";
    
    if (timeInterval === 0) {
        spawnEnemy();
        timeInterval = 80;
    } else {
        timeInterval--;
    }
    
    if (heartTimer <= 0) {
        heart.x = 1030;
        heart.y = Math.random()*(500-30);
        heartTimer = 1200;
    } else {
        heartTimer --;
    }
}

spawnEnemy();
setInterval(update,25);