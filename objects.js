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