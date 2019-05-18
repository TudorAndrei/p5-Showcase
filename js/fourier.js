var time = 0;
var wave = [];
var slider;

let r, g, b;

function setup() {
  var canvas = createCanvas(1000, 500);
  slider = createSlider(1, 10, 5);
  canvas.parent("contain-canvas");
  slider.parent("contain-canvas");
}

function draw() {
  background(255);
  translate(200, 200);

  var x = 0;
  var y = 0;

  for (var i = 0; i < slider.value(); i++) {
    var prevx = x;
    var prevy = y;

    var n = i * 2 + 1;
    var radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(0, 100);
    strokeWeight(4);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    stroke(1);
    line(prevx, prevy, x, y);
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();

  for (i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > 250) {
    wave.pop();
  }
}

function windowResized() {
  resizeCanvas(1000, 500);
}