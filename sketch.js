/* eslint-disable */
function setup() {
  createCanvas(400, 400, WEBGL);
  smooth();
  // strokeCap(ROUND);
  // blendMode(SCREEN);
}

var start = 10;
var i = start;
var end = start + 180;
var length = end - start;
function draw() {
  background(0);
  stroke(255);
  translate(-200, -200, 0);
  // 2D model
  // plane(50, 50);
  var s = 0;
  if (i < end) {
    i += (end - i) * 0.1;
  }
  for (let j = 0; j < 5; j++) {
    strokeWeight(j);
    stroke(`rgba(255,255,255,${(5 - j) / 5})`);
    rect(start, 100, i, i);
  }
  // 3D model
  translate(100, 100, 0);
  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  noFill();
  let r = 3;
  for (let i = 0; i < r; i++) {
    // strokeJoin(ROUND);
    strokeWeight(i);
    stroke(`rgba(255,255,255,${(5 - i) / 5})`);
    box(40, 70);
  }
  // console.log(i);
  // noFill();
  // i += 0.3;
  // arc(50, 55, 50, 50, HALF_PI + i, PI + i);
}
class CircleUI {}
class LineUI {
  constructor() {
    this.start = 30;
    this.end = 230;
    this.x = 0;
    this.y = 0;
  }
}
