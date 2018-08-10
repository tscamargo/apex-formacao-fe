


function teste(){
                
    var element = document.getElementsByTagName('div');
    element[0].innerHTML = 'Hello World';
    return element;

};

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();