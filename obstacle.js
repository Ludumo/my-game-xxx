class Obstacle {

    constructor(image, type) {
        this.image = image;
        this.x = width;
        this.y = (Math.random() * height) / 1.5 ;
        this.width = 50;
        this.height = 50;
        this.type = type;
    }

    draw() {
        this.x--;
         image(this.image, this.x, this.y, this.width, this.height);
    }


    collision(playerInfo) {
      //  console.log('collision', playerInfo);
      // get the middle of the obstacle
      let obstacleX = this.x + this.width / 2;
      let obstacleY = this.y + this.height / 2;

      // get the middle of the player
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;

      if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
          return false
      } else {
          // here we have a collision
          console.log(this.image);
      if (this.type === 'mineral') {
          game.player.score += 10 
          
        }
        if (this.type === 'poison') {
            game.player.energy -= 10
        }
        console.log (game.player.energy);
        console.log(game.player.score);
        return true;
      } 
    }

}