export default class MouseControl {
  constructor(x, y, pressed) {
    this.x = x;
    this.y = y;
    this.pressed = pressed;
    console.dir(this);
  }

  update(x, y, pressed) {
    this.x = x;
    this.y = y;
    this.pressed = pressed;
  }

  set x(x) {
    this._x = x;
  }
  get x() {
    return this._x;
  }

  set y(x) {
    this._y = x;
  }
  get y() {
    return this._y;
  }

  set pressed(pressed) {
    this._pressed = pressed;
  }

  get pressed() {
    return this._pressed;
  }
}
