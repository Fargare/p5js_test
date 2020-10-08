/* eslint-disable */
let bg, myFont;
let width = 1280;
let height = 720;
function preload() {
  bg = loadImage("assets/bg.jpg");
  myFont = loadFont("assets/GOTHIC.TTF");
}
function setup() {
  createCanvas(width, height, WEBGL);
  ortho();
  frameRate(30);
}
// let img =
var count = 0;
var start = 0;
var i = start;
var end = 200;
var s_end = 100;
var s = 0;
var length = end - start;
var clicked = { bool: false, mouseX: 0, mouseY: 0 };
function draw() {
  background(0);
  translate(-(width / 2), -(height / 2));
  image(bg, 0, 0);
  smooth();
  // 2D model
  noFill();
  stroke(255);
  drawClock();
  if (i < end) {
    i += (end - i) * 0.1;
  }
  strokeWeight(5);
  line(start, 100, i, 100);
  // circle(50, 50, 100);

  // g3.background(0);

  //3D
  draw3D();
}
function drawClock() {
  var now = new Date();
  let nowSecond = now.getSeconds() + now.getMilliseconds() / 1000;
  let nowMinute = now.getMinutes();
  let nowHour = now.getHours();
  // let s, m, h;
  if (s < s_end) {
    s += (s_end - s) * 0.1;
  }
  fill(255);
  textFont(myFont);
  textSize(s / 3);
  textAlign(CENTER);
  text("c" + now.toDateString(), width / 2 - 150, height / 2 + 150, 300, 300);

  noFill();
  strokeWeight(5);
  point(
    width / 2 + (s + 35) * cos(((-90 + (nowSecond / 60) * 360) * PI) / 180),
    height / 2 + (s + 35) * sin(((-90 + (nowSecond / 60) * 360) * PI) / 180)
  );
  point(
    width / 2 +
      ((s + 30) * 0.8 + 5) * cos(((-90 + (nowMinute / 60) * 360) * PI) / 180),
    height / 2 +
      ((s + 30) * 0.8 + 5) * sin(((-90 + (nowMinute / 60) * 360) * PI) / 180)
  );
  point(
    width / 2 +
      ((s + 30) * 0.5 + 5) * cos(((-90 + (nowHour / 12) * 360) * PI) / 180),
    height / 2 +
      ((s + 30) * 0.5 + 5) * sin(((-90 + (nowHour / 12) * 360) * PI) / 180)
  );
  strokeWeight(1);
  line(
    width / 2 + 30 * cos(((-90 + (nowSecond / 60) * 360) * PI) / 180),
    height / 2 + 30 * sin(((-90 + (nowSecond / 60) * 360) * PI) / 180),
    width / 2 + (30 + s) * cos(((-90 + (nowSecond / 60) * 360) * PI) / 180),
    height / 2 + (30 + s) * sin(((-90 + (nowSecond / 60) * 360) * PI) / 180)
  );
  strokeWeight(3);
  line(
    width / 2 + 30 * cos(((-90 + (nowMinute / 60) * 360) * PI) / 180),
    height / 2 + 30 * sin(((-90 + (nowMinute / 60) * 360) * PI) / 180),
    width / 2 +
      (30 + s) * 0.8 * cos(((-90 + (nowMinute / 60) * 360) * PI) / 180),
    height / 2 +
      (30 + s) * 0.8 * sin(((-90 + (nowMinute / 60) * 360) * PI) / 180)
  );
  strokeWeight(5);
  line(
    width / 2 + 30 * cos(((-90 + (nowHour / 12) * 360) * PI) / 180),
    height / 2 + 30 * sin(((-90 + (nowHour / 12) * 360) * PI) / 180),
    width / 2 + (30 + s) * 0.5 * cos(((-90 + (nowHour / 12) * 360) * PI) / 180),
    height / 2 + (30 + s) * 0.5 * sin(((-90 + (nowHour / 12) * 360) * PI) / 180)
  );
  strokeWeight(0.5);
  arc(width / 2, height / 2, s * 1.4 * 2, s * 1.4 * 2, 0, PI * 2, CHORD, 50);
  strokeWeight(10);
  point(width / 2, height / 2);
  // arc(width / 2, height / 2, s / 1.8, s / 1.8, 0, PI * 2, CHORD, 50);
  strokeWeight(2);
  for (let i = 0; i < 2 * PI; i += PI / 6) {
    line(
      width / 2 + s * 1.3 * cos(i),
      height / 2 + s * 1.3 * sin(i),
      width / 2 + s * 1.4 * cos(i),
      height / 2 + s * 1.4 * sin(i)
    );
  }
}
function draw3D() {
  noFill();
  stroke(255);
  strokeWeight(1);
  push();
  translate(430, 300, 50);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  box(s / 2);
  pop();
  push();
  translate(850, 300, 50);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  sphere(s / 2, 3, 2);
  pop();
}

function mouseClicked() {
  s = 0;
  console.log(getFrameRate());
}
