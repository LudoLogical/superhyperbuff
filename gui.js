var doIntro = function () {
    ctx.fillStyle = "white";
    ctx.font = "50px 'Muli'";
    ctx.textAlign = "center";
    ctx.fillText("SuperHyperBuff",250,130);
    ctx.font = "20px 'Muli'";
    ctx.fillText("Press [SPACE] to begin.",250,160);
    ctx.fillStyle = "#CCCCCC";
    ctx.fillText("WASD - Move",250,220);
    ctx.fillText("Space - Smash",250,250);
    ctx.fillText("Hearts - Life",250,280);
    ctx.fillText("Red - Super Move (Kills)",250,310);
    ctx.fillText("Yellow - Level (Score)",250,340);
    ctx.fillText("Green - Time (Minutes)",250,370);
    ctx.drawImage(deersplash,525,20,450,450);
    if (spacepress) {
        gameStart = true;
    }
}

var doGameOver = function () {
    ctx.fillStyle = "white";
    ctx.font = "50px 'Muli'";
    ctx.textAlign = "center";
    ctx.fillText("Game Over",250,130);
    ctx.font = "20px 'Muli'";
    ctx.fillText("Press [SPACE] to reload.",250,160);
    ctx.fillStyle = "#CCCCCC";
    ctx.fillText("Level One Kills: " + kills[0],250,220);
    ctx.fillText("Level Two Kills: " + kills[1],250,250);
    ctx.fillText("Level Three Kills: " + kills[2],250,280);
    ctx.fillText("Total Kills: " + (kills[0]+kills[1]+kills[2]),250,310);
    ctx.fillText("Total Score: " + score,250,340);
    ctx.fillText("Seconds Survived: " + Math.round(timeNow),250,370);
    ctx.drawImage(octosplash,525,25,450,450);
    if (spacepress) {
        location.reload();
    }
}

var doGUI = function () {
    //HEARTS
    for (var i = 2; i <= player.hp; i += 2) {
        ctx.drawImage(hearts[1],(10+(40*((i/2)-1))),10,30,30);
    }
    if (player.hp % 2 === 1) {
        ctx.drawImage(hearts[0],(50+(40*((Math.floor(player.hp/2))-1))),10,30,30);
    }
    
    //VAR PREP
    var totalKills = kills[0]+kills[1]+kills[2];
    timeNow = (Date.now()-timeStart)/1000;

    //KILLS (RED)
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

    //SCORE (YELLOW)
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

    //TIME (GREEN)
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

    //DO DIFFICULTY CALCULATION BEFORE LOCAL INFO EXPIRES
    difficulty = Math.floor(1.5*(totalKills/20)) + Math.floor(score/10) + 4*Math.floor(timeNow/60);
}