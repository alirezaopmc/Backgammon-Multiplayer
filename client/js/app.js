

let sections = [];
let canvWidth = 620,
  canvHeight = 430;

let menu = "main";
let img;

function preload() {
  img = loadImage('/client/img/backgammon.jpg')
}

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
    sections.push(new Section(i * 30, 340 - 10, i + 12));

    if (i == 1) {
      for (let j = 0; j <= 5; j++) {
        sections[12].pieces.push(
          new Piece(sections[12], 340 - (j + 1) * 15 - 10)
        );
      }
    }

    if (i == 6) {
      for (let j = 0; j <= 2; j++) {
        sections[16].pieces.push(
          new Piece(sections[16], 340 - (j + 1) * 15 - 10)
        );
      }
    }
  }

  for (let i = 7; i <= 12; i++) {
    sections.push(new Section(i * 30 + 40, 340 - 10, i + 12));

    if (i == 7) {
      for (let j = 0; j <= 5; j++) {
        sections[18].pieces.push(
          new Piece(sections[18], 340 - (j + 1) * 15 - 10)
        );
      }
    }

    if (i == 12) {
      for (let j = 0; j <= 1; j++) {
        sections[23].pieces.push(
          new Piece(sections[23], 340 - (j + 1) * 15 - 10)
        );
      }
    }
  }
}

function draw() {
  let sceneUtil = new Scene()

  sceneUtil.drawMainMenu(menu, img);

  if(menu == 'game'){
    sceneUtil.drawGameScene(menu)
  }

}

function mouseClicked() {
  if (menu == 'main') {
    if (mouseX < 400 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        menu = 'game'
      } else if (mouseY < 275 && mouseY > 200) {
        menu = 'findGame'
      } else if (mouseY < 425 && mouseY > 350) {
        menu = 'exit'
        //exit electron process
      }
    }

  }
}
