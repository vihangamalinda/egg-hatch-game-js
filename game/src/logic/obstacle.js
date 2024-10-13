import drawHelper from "./utility/drawUtility.js";

export default class Obstacle {
  constructor(game) {
    this.game = game;
    this.collisionX = Math.random() * this.game.width;
    this.collisionY = Math.random() * this.game.height;
    this.collisionRadius = 100;
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

  set collisionX(collisionX) {
    this._collisionX = collisionX;
  }

  get collisionY() {
    return this._collisionY;
  }
  set collisionY(collisionY) {
    this._collisionY = collisionY;
  }

  get collisionRadius() {
    return this._collisionRadius;
  }

  set collisionRadius(collisionRadius) {
    this._collisionRadius = collisionRadius;
  }

  draw(context) {
    console.log("draw");
    drawHelper(context, this);
  }
}
