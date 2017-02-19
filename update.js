var update = function () {
    //CLEAR RECTANGLE FOR ALL ACTIONS
    ctx.clearRect(0,0,1000,500);
    
    if (!gameStart) {
        ctx.fillStyle = "white";
        ctx.font = "50px 'Muli'";
        ctx.textAlign = "center";
        ctx.fillText("Buff Things",250,130);
        ctx.font = "20px 'Muli'";
        ctx.fillText("Press [SPACE] to begin.",250,160);
        ctx.fillStyle = "#CCCCCC";
        ctx.fillText("WASD - Move",250,220);
        ctx.fillText("Space - Smash",250,250);
        ctx.fillText("Hearts - Life",250,280);
        ctx.fillText("Red - Super Move (Kills)",250,310);
        ctx.fillText("Yellow - Level (Score)",250,340);
        ctx.fillText("Green - Time (Minutes)",250,370);
        ctx.drawImage(deer1,525,20,450,450);
        if (spacepress) {
            gameStart = true;
        }
    } else if (player.hp <= 0) {
        ctx.fillStyle = "white";
        ctx.font = "50px 'Muli'";
        ctx.textAlign = "center";
        ctx.fillText("Game Over",ctx.canvas.width/2,80);
        ctx.font = "20px 'Muli'";
        ctx.fillText("Press [SPACE] to reload.",500,110);
        ctx.fillStyle = "#CCCCCC";
        ctx.fillText("Level One Kills: " + kills[0],500,220);
        ctx.fillText("Level Two Kills: " + kills[1],500,250);
        ctx.fillText("Level Three Kills: " + kills[2],500,280);
        ctx.fillText("Total Kills: " + (kills[0]+kills[1]+kills[2]),500,310);
        ctx.fillText("Total Score: " + score,500,340);
        ctx.fillText("Seconds Survived: " + Math.round(timeNow),500,370);
        if (spacepress) {
            location.reload();
        }
    } else {
        ctx.drawImage(bg,0,0,1000,500);
        
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

        var totalKills = kills[0]+kills[1]+kills[2];
        var percent = (totalKills%20)/20;

        ctx.strokeStyle = "#d9b2ff";
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
        ctx.fillText(Math.floor(totalKills/20),675,447);
        ctx.textAlign = "left";

        percent = (score%10)/10;

        ctx.strokeStyle = "#d9b2ff";
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

        timeNow = (Date.now()-timeStart)/1000;
        percent = (timeNow%60)/60;

        ctx.strokeStyle = "#d9b2ff";
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

        difficulty = Math.floor(1.5*(totalKills/20)) + Math.floor(score/10) + 4*Math.floor(timeNow/60);
        
        if (timeInterval === 0) {
            spawnEnemy();
            timeInterval = 80-Math.floor(difficulty/2);
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
}

spawnEnemy();
setInterval(update,25);