class Background {
    draw() {
        console.log('this is background drawing'); 
        console.log(width, height); 

        game.backgroundImages.forEach(function(img) {
            img.x -= img.speed;
            image(img.src, img.x, 0, width, height);  
            // we add second image
            image(img.src, img.x + width, 0, width, height); 
        //if the image moves out of screen then needs to be reset
            if(img.x <= - width) {
                 img.x = 0; 
            }
        })

    }
}