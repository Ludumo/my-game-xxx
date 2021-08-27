class Player {

    constructor() {
        this.songState = true;
        this.energy = 100;
        this.score = 0;
        this.gravity = 0.2;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 0;
        this.y = height - this.height;
    }


    draw() {
        //console.log('drawing the player')
        // this pushes player down
        this.velocity += this.gravity;
        this.y += this.velocity;
        // if afroman moves lower than the ground
        // then should be set to its starting position
        if(this.y >= height - this.height) {
            
            this.y = height - this.height;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

    jump() {
        console.log('jump');
        this.velocity = -10;
    }
}