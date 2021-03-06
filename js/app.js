// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // The dt parameter will ensure the game runs at the same speed for
    // all computers..
    this.x += this.speed * dt;
    if (this.x > 480) {
      this.x = -80;
      this.speed = 50 + Math.floor(Math.random() * 350);
    };
    /*Collision algorithm from:
    /*https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#Axis-Aligned_Bounding_Box*/
    if (player.x < this.x + 75 && player.x + 75 > this.x && player.y < this.y + 75 && 75 + player.y > this.y) {
      player.x = 202;
      player.y = 405;
    };

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
let Player = function (x, y) {
  this.x = x;
  this.y = y;
  this.player = 'images/char-princess-girl.png';
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
/*keyboard integration places player inthe middle of the tile*/
Player.prototype.handleInput = function (keypress) {
    switch (keypress) {
      case 'left':
        if (this.x > 0) {
          this.x -= 101;
        }
        break;
      case 'right':
        if (this.x < 404) {
          this.x += 101;
        }
        break;
      case 'up':
        if (this.y > -10) {
            this.y -= 83;
        }
        break;
      case 'down':
        if (this.y < 405) {
          this.y += 83;
        }
        break;
      default:
        alert('use the arrow keys to move the player');
    }
    // console.log(this.x);
    // console.log(this.y);
    /*when the player wins, reset the player position to the begining
    and lets you know the player won*/
    if (this.y === -10) {
      let win = document.querySelector('h1');
      win.style.visibility = "visible";
      setTimeout(function() {
        win.style.visibility = "hidden";
        player.x = 202;
        player.y = 405;
      }, 1000);
    }
  };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy1 = new Enemy (0, 73, Math.floor(Math.random()*300));
let enemy2 = new Enemy (0, 156, Math.floor(Math.random()*300));
let enemy3 = new Enemy (0, 239, Math.floor(Math.random()*300));
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player = new Player (202, 405);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
