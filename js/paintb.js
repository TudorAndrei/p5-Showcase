let degree = 0;

function setup() {
    var canvas = createCanvas(windowWidth *0.8, windowHeight* 0.7, WEBGL);
    canvas.parent('contain-canvas');
}

function draw() {
    background('black');
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    ambientLight(60, 60, 60);
    pointLight(1, 255, 255, locX, locY, 50);
    noStroke();

    rotateX(degree);
    rotateY(degree);
    rotateZ(degree);

    specularMaterial(255);
    torus(100, 40, 10, 10);

    degree += 0.01;

}

function windowResized() {
    resizeCanvas(windowWidth *0.8, windowHeight* 0.7);
}