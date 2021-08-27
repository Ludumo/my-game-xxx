const game = new Game();



function preload() {
    // here we pre load game assets
    game.preloadGame();
}

function setup() {
   
 createCanvas(600, 600);
 game.setup();
}

function hiScoreTally() {
    if (hiScoreCounter < scoreCounter) {
        hiScoreCounter = scoreCounter;
    }
}


function draw() {
 game.draw();
}

function keyPressed() {
    if(keyCode === 32) {
        game.player.jump();
    }
};
