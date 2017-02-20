var update = function () {
    //CLEAR RECTANGLE FOR ALL ACTIONS
    ctx.clearRect(0,0,1000,500);
    
    if (!gameStart) {
        doIntro();
    } else if (player.hp <= 0) {
        doGameOver();
    } else {
        ctx.drawImage(bg,0,0,1000,500);
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].update();
            if (enemies[i].removeMark === true) {
                enemies.splice(i,1);
            }
        }
        heart.update();
        for (var i = 0; i < ambiances.length; i++) {
            ambiances[i].update();
            if (ambiances[i].removeMark === true) {
                ambiances.splice(i,1);
            }
        }
        octopus.update();
        player.update();

        doGUI();
        
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
        
        if (ambianceInterval === 0) {
            spawnAmbiance();
            ambianceInterval = 40;
        } else {
            ambianceInterval --;
        }
        
        if (Math.floor(difficulty/20) > octovisits) {
            octovisits += 1;
            octopus.y = -200;
            for (var j = 0; j < 5; j++) {
                spawnEnemy();
            }
        }
    }
}

setInterval(update,25);