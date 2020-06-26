class Punctuation {
  constructor() {
    this.points = 0;
  }

  display() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.points), width - 30, 50);
  }

  addPoints() {
    this.points += 0.2;
  }
}