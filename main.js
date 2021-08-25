const game = new Game();

function preload() {
 // here we pre load game assets
 game.preloadGame();
}

function setup() {
 createCanvas(600, 600);
}




function draw() {
 game.draw();
}

/* function keyPressed() {
    console.log(keyCode)
    if (![39, 37, 40, 38].includes(keyCode)) {
       // alert('wrong keycode');
    }
    if (keyCode === 39) {
        //move player right
        game.player.moveRight();
    } 
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keyCode === 40) {
    game.player.moveDown();
    }
    if (keyCode === 38) {
    game.player.moveUp();
    }  
} */