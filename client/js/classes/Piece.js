class Piece {
  constructor(section, y = 15) {
    this.color = '';
    this.section = section;
    this.sectionIndex = this.section.index;
    this.x = this.section.x;
    this.y = y;
    this.diameter = 23;
  }

  setColor() {
    let white = '#f7f3a5';
    let black = '#8e4141';
    let color;
    switch (this.sectionIndex) {
      case 1:
        color = white;
        break;
      case 5:
        color = black;
        break;
      case 7:
        color = black;
        break;
      case 12:
        color = white;
        break;
      case 13:
        color = black;
        break;
      case 17:
        color = white;
        break;
      case 19:
        color = white;
        break;
      case 24:
        color = black;
        break;
      default:
        color = white;
        break;
    }

    this.color = color;
  }

  setY() {
    console.log(this.sectionIndex)
    if (this.section.pieces[this.section.pieces.length - 1] && this.sectionIndex < 13) {
      console.log('upper')
      this.y = this.section.pieces[this.section.pieces.length - 1].y + 15;
    } else if (this.section.pieces[this.section.pieces.length - 1] && 13 < this.sectionIndex) {
      console.log('lower')
      this.y = this.section.pieces[this.section.pieces.length - 1].y + -15;
    } else {
      console.log('bullshit')
      this.y = this.section.y - 15;
    }
  }

  render() {
    this.setColor();
    // if (
    //   dist(this.x, this.y, mouseX, mouseY) < this.diameter / 2 &&
    //   mouseIsPressed
    // ) {
    //   this.x = mouseX;
    //   this.y = mouseY;
    // }
    stroke(0);
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
}
