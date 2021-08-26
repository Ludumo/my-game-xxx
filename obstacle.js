class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = (Math.random() * height) / 2.5;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        this.x--;
         image(this.image, this.x, this.y, this.width, this.height);
    }

    collision(playerInfo) {
        console.log('collision', playerInfo);
    }

}