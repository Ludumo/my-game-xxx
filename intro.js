//this preloads game assests 
let playerImage;

function preload() {
    playerImage = loadImage('barry.png');

}

// This creates HTML element
function setup() {
    console.log('setup')

 createCanvas(1000, 600)
}

 let x = 50; 
 let speed = 2;

function draw() {

//this renders the imgae
//image(imageItself, x, y, width, height)

image(playerImage, 200, 100, 100, 100) 


    //this clears the canvas
    //clear();
   // console.log('i am drawing')
   //this move circle along the cursor
   // console.log(mouseX, mouseY)
    //circle(mouseX, mouseY, 100);
    //this draws a circle
    //circle(x, y, radius)
    //fill('red')
// this moves circle to the right then changes direction
    /* x += speed;
    if (x >= 950) {
         speed = - 2;
    } */
    //circle(x, 400, 100);
    // this creates a rectangle
    // rect(xCoordinate, yCoordinate, width, height) 
    fill('blue')
    stroke('red')
    //rect(100, 100, 50, 50);

    
    //strokeWeight(4)
    //stroke('blue')
    //this draws a line
    //line(startX, startY, endX, endY)
    //line(0, 500, 1000, 500)
    //line(0, 550, 1000, 550)
}