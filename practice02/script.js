/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 60;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function () {
    this.top += 50;
  }
  this.moveLeft = function () {
    this.left -= 70;
  }
  this.moveUp = function () {
    this.top -= 70;
  }

}

var hero = new Hero('dog.png', 20, 10, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top === 20) {
    hero.moveRight();
  } else if (hero.left >=  window.innerWidth - hero.size && hero.top + hero.size < window.innerHeight ) {
      hero.moveDown();
  } else if (hero.top >= window.innerHeight - hero.size && hero.left > 0) {
    hero.moveLeft();
  } else if (hero.top >= 0 && hero.left <=0) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();