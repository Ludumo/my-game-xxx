class Game {
    constructor() {
        this.background = new Background();
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
        ]
    }
    
    draw() {
        clear();
        //all the objects are drawn that the game needs
        this.background.draw();
        
    }
    
    
}