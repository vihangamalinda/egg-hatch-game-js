export default class Player {
  constructor(game) {
    this.game = game;
    this.collisionX = this.game.width * 0.5;
    this.collisionY = this.game.height * 0.5;
    this.collisionRadius = 59;
    this.speedX = 0;
    this.speedY = 0;
    this.speedModifier = 5;
    // console.log(this);
  }

  get game() {
    return this._game;
  }
  set game(game) {
    this._game = game;
  }

  get collisionX() {
    return this._collisionX;
  }

  set collisionY(collisionY) {
    this._collisionY = collisionY;
  }

  get collisionY() {
    return this._collisionY;
  }

  set collisionX(collisionX) {
    this._collisionX = collisionX;
  }

  get collisionRadius() {
    return this._collisionRadius;
  }

  set collisionRadius(collisionRadius) {
    this._collisionRadius = collisionRadius;
  }

  get speedX() {
    return this._speedX;
  }

  set speedX(speedX) {
    // console.log(speedX);
    this._speedX = speedX;
    // console.log(speedX);
  }

  get speedY() {
    return this._speedY;
  }

  set speedY(speedY) {
    this._speedY = speedY;
    console.log(speedY);
  }

  set speedModifier(speedModifier) {
    this._speedModifier = speedModifier;
  }

  get speedModifier() {
    return this._speedModifier;
  }

  draw(context) {
    context.beginPath();
    context.arc(
      this.collisionX,
      this.collisionY,
      this.collisionRadius,
      0,
      Math.PI * 2
    );
    context.save();
    context.globalAlpha = 0.5;
    context.fill();
    context.restore();
    context.stroke();
    context.beginPath();
    //  MoveTo() method will define starting x and y coordinates of the line
    context.moveTo(this.collisionX, this.collisionY);
    // LineTo() method will set the ending x and y coordinates of the line
    context.lineTo(this.game.mouse.x, this.game.mouse.y);
    context.stroke();
  }

  update() {
    this.dx = this.game.mouse.x - this.collisionX; // distance from mouse click point to player position x
    this.dy = this.game.mouse.y - this.collisionY; // distance from mouse click point to player position y
    const hypotenuseDisctance = Math.hypot(this.dy, this.dx);
    if (hypotenuseDisctance > this.speedModifier) {
      this.speedX = (this.dx / hypotenuseDisctance) * this.speedModifier || 0;
      this.speedY = (this.dy / hypotenuseDisctance) * this.speedModifier || 0;
    } else {
      this.speedX = 0;
      this.speedY = 0;
    }
    console.log(this.speedX);
    console.log(this.speedY);
    this.collisionX += this.speedX;
    this.collisionY += this.speedY;
    // console.log(this)
  }
}
