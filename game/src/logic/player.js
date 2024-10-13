export default class Player {
  constructor(game) {
    this.game = game;
    this.collisionX = this.game.width * 0.5;
    this.collisionY = this.game.height * 0.5;
    this.collisionRadius = 59;
    console.log(this);
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
  }
}
