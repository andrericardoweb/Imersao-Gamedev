

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.setup();
  frameRate(40);
  //soundtrack.loop();
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  game.draw();
}