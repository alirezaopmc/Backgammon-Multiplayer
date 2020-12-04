class Button {
    constructor(x,y,width,height, text, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.color = color;
    }

    drawButton(textX =  this.x + 20, textY = this.y + 50, textFontSize = 50, color=255){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
        textSize(textFontSize);
        fill(color);
        text(this.text, textX, textY);
    }

    
}