class Section {
  constructor(x, y, index) {
    this.pieces = [];
    this.x = x;
    this.y = y;
    this.index = index;
  }

  movePiece(num, targetSectionIndex) {
    let targetSection = sections.find((s) => {
      if (s.index === targetSectionIndex) {
        return true;
      }
    });

    if (!targetSection) return;

    while (num > 0) {
      let movingPiece = this.pieces[this.pieces.length - 1];
      movingPiece.section = targetSection;
      movingPiece.x = targetSection.x;
      movingPiece.sectionIndex = targetSection.index;
      movingPiece.setY();
      
      targetSection.pieces.push(movingPiece);
      this.pieces.pop();
      num--;
    }
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
