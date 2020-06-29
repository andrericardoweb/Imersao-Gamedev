class ManagerButton {
  constructor(textButton, x, y){
    this.textButton = textButton;
    this.x = x;
    this.y = y;
    this.button = createButton(this.textButton);
  }

  draw(){
    this.button.position(this.x, this.y)
  }
}