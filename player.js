class Player {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.width = 100;
        this.height = 100;
        this.image;
    }
    draw() {

        image(this.image, this.x, this.y, this.width, this.height);

        //if key is held down the player keeps moving
        /*  if (KeyIsDown(68)) {
            this.moveRight();
        } */ 
    }

    moveRight() {
        console.log('moving right')
        
        this.x += 10;
    }

    moveLeft() {
        this.x -= 10;
    }
    moveUp() {
        this.y -= 10;
    }
    moveDown() {
        this.y += 10;
    }
}