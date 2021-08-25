class Game {
    constructor() {
        this.background = new Background();
    }

    preloadGame() {
        this.backgroundImages = [
            {src:loadImage('background pics/1.png')}
            // load image function
        ]
    }
    
    draw() {
        clear();
        //all the objects are drawn that the game needs
        this.background.draw();
        
    }
    
    
}