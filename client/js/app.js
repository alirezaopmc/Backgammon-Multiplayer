let sections = [];
let canvWidth = 620,
  canvHeight = 340;
function setup() {
  createCanvas(canvWidth, canvHeight);

  for (let i = 1; i <= 6; i++) {
    sections.push(new Section(i * 30, 10, i));
    if (i == 1) {
      for (let j = 0; j <= 5; j++) {
        sections[0].pieces.push(new Piece(sections[0], (j + 1) * 15 + 10));
      }
    }
    if (i == 5) {
      for (let j = 0; j <= 2; j++) {
        sections[4].pieces.push(new Piece(sections[4], (j + 1) * 15 + 10));
      }
    }
  }

  for (let i = 7; i <= 12; i++) {
    sections.push(new Section(i * 30 + 40, 10, i));
    if (i == 7) {
      for (let j = 0; j <= 5; j++) {
        sections[6].pieces.push(new Piece(sections[6], (j + 1) * 15 + 10));
      }
    }

    if (i == 12) {
      for (let j = 0; j <= 1; j++) {
        sections[11].pieces.push(new Piece(sections[11], (j + 1) * 15 + 10));
      }
    }
  }

  for (let i = 1; i <= 6; i++) {
    sections.push(new Section(i * 30, canvHeight - 10, i + 12));

    if (i == 1) {
      for (let j = 0; j <= 5; j++) {
        sections[12].pieces.push(
          new Piece(sections[12], canvHeight - (j + 1) * 15 - 10)
        );
      }
    }

    if (i == 6) {
      for (let j = 0; j <= 2; j++) {
        sections[16].pieces.push(
          new Piece(sections[16], canvHeight - (j + 1) * 15 - 10)
        );
      }
    }
  }

  for (let i = 7; i <= 12; i++) {
    sections.push(new Section(i * 30 + 40, canvHeight - 10, i + 12));

    if (i == 7) {
      for (let j = 0; j <= 5; j++) {
        sections[18].pieces.push(
          new Piece(sections[18], canvHeight - (j + 1) * 15 - 10)
        );
      }
    }

    if (i == 12) {
      for (let j = 0; j <= 1; j++) {
        sections[23].pieces.push(
          new Piece(sections[23], canvHeight - (j + 1) * 15 - 10)
        );
      }
    }
  }
}

function draw() {
  background('#CD853F');
  strokeWeight(2);
  //stroke()
  rect(canvWidth / 2 - 435 / 4, 0, 30, 340);
  rect(0, 0, 10, 340);
  rect(0, 0, 425, 10);
  rect(425, 0, 10, 340);
  rect(0, 330, 425, 10);

  sections.forEach((section, i) => {
    section.render((i + 1) % 2 === 0 ? '#fffdd2' : '#621514');
  });
  sections.forEach((section) => {
    strokeWeight(1);
    section.pieces.forEach((piece) => piece.render());
  });
}
