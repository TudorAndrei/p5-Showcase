let x;
let y;

let xspeed;
let yspeed;

let img;

function preload() {
    img = loadImage('p5_logo.png');
}
/*
TO DO:

- fif the full screen thing

*/
function setup() {
    var canvas = createCanvas(windowWidth *0.6, windowHeight*0.5);
    canvas.parent('sketch-holder');
    x = random(width);
    y = random(height);
    xspeed = 3;
    yspeed = 3;
}


function draw() {

    background(0);
    image(img, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + img.width >= width) {
        xspeed *= -1;
        x = width - img.width;
    } else if (x <= 0) {
        xspeed *= -1;
        x = 0;
    }

    if (y + img.height >= height) {
        yspeed *= -1;
        y = height - img.height;
    } else if (y <= 0) {
        yspeed *= -1;
        y = 0;
    }
}

function windowResized() {
    resizeCanvas(windowWidth *0.8, windowHeight*0.8);
}