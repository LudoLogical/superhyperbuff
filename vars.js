//GET CANVAS CONTEXT (FOR MANIPULAITON)
var ctx = document.getElementById("ctx").getContext("2d");
var score = 0;
var kills = [0,0,0];
var timeStart = Date.now();
var timeNow = 0;
var heartTimer = 1200;
var gameStart = false;
var difficulty = 0;
var octovisits = 0;

//GENERAL VARS
var wpress = false;
var apress = false;
var spress = false;
var dpress = false;
var spacepress = false;

var timeInterval = 80;
var enemies = [];
var ambiances = [];
var ambianceInterval = 40;

//DOCUMENT FUNCTIONS SETUP
document.onkeydown = function (e) {
    switch(e.keyCode) {
        case 87: //w
            wpress = true;
            break;
        case 65: //a
            apress = true;
            break;
        case 83: //s
            spress = true;
            break;
        case 68: //d
            dpress = true;
            break;
        case 32: //space
            spacepress = true;
            break;
        default: break;
    }
};

//MOVE VAR RESET
document.onkeyup = function (e) {
    switch(e.keyCode) {
        case 87: //w
            wpress = false;
            break;
        case 65: //a
            apress = false;
            break;
        case 83: //s
            spress = false;
            break;
        case 68: //d
            dpress = false;
            break;
        case 32: //space
            spacepress = false;
            break;
        default: break;
    }
};

//TEST COLLISIONS
var testcollisionrect = function(a,b,override) {
    if (override) { //test with smash
        return a.x < b.x + b.w + 40 &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.h + a.y > b.y;
    } else {
        return a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.h + a.y > b.y;
    }
};