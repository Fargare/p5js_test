/* eslint-disable */

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, mouseX % 80, mouseY % 80);
}
