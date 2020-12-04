class Scene {
    drawGameScene(menu){
        menu = "game"
        background('#fff');
        fill("#CD853F")
        rect(0,0,425, 340)
        strokeWeight(2);
        //stroke()
        fill("#8e4141")
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

    drawMainMenu(menu, img){
        menu = "main"
        image(img,0, 0, 550, 450);

        let hostBtn = new Button(50, 50, 340, 75, "HOST GAME", "#00ff00")
        let findBtn = new Button(50, 200, 340, 75, "FIND GAME", "#ff00ff")
        let exitBtn = new Button(50, 350, 340, 75,"EXIT", "#ff0000")

        hostBtn.drawButton()
        findBtn.drawButton()
        exitBtn.drawButton(160)

    }
    
}
