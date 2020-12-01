class Section {
  constructor(x, y, index) {
    this.pieces = [];
    this.x = x;
    this.y = y;
    this.index = index;
  }

  render(color) {
    if (this.index <= 12) {
      fill(color);
      noStroke();
      triangle(this.x - 15, this.y, this.x, 120, this.x + 15, this.y);
    } else {
      fill(color);
      noStroke();
      triangle(this.x - 15, this.y, this.x, 220, this.x + 15, this.y);
    }
  }
}
