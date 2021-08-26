class Game {

    constructor() {
        /* this.background = new Background();
            this.player = new Player(); */
        this.backgroundImages = [];
        this.playerImage = null;
        this.obstacles = [];    
    }

    setup() {
        this.background = new Background();
            this.player = new Player();
    }

    preloadGame() {
        this.backgroundImages = [
            {src:loadImage('background pics/1.png'), x: 0, speed: 0},
            {src:loadImage('background pics/2.png'), x: 0, speed: 1},
            {src:loadImage('background pics/3.png'), x: 0, speed: 2},
            {src:loadImage('background pics/4.png'), x: 0, speed: 3},
            {src:loadImage('background pics/5.png'), x: 0, speed: 4},
            {src:loadImage('background pics/6.png'), x: 0, speed: 5},
            {src:loadImage('background pics/7.png'), x: 0, speed: 6},
            {src:loadImage('background pics/8.png'), x: 0, speed: 7},
            // load image function
        ];
        this.playerImage = loadImage('player/run.gif');
        this.mineralImage = loadImage('obstacles/PNG/Transperent/Icon44.png');
        this.poisonImage = loadImage('obstacles/PNG/Transperent/Icon7.png');

    }
    
    draw() {
        clear();
        //all the objects are drawn that the game needs
        this.background.draw();
        
        this.player.draw();
        // this adds minerals to obstacles array
        if(frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle(this.mineralImage, 'mineral'));
           // console.log(this.obstacles);
        }

        if(frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle(this.poisonImage, 'poison'));
           // console.log(this.obstacles);
        }
        // we need to iterate over the obstacles array and call for every object
        // inside draw function
        this.obstacles.forEach(function(obstacle) {
            obstacle.draw();
        })
        this.obstacles = this.obstacles.filter((obstacle) => {
            // if we colide obstacle moves out of screen
            if (obstacle.collision(this.player) || (obstacle.x + obstacle.width) < 0) {
                return false
            }else {
                return true
            }
        })
    }
    
     
}