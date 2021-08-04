var seaImg
var shipAnimation


function preload(){
 
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200)
  sea.addImage(seaImg)
  sea.scale= 0.2

  
  ship = createSprite(200,200);
  ship.addAnimation("shipping",shipAnimation)
  ship.scale = 0.2

}

function draw() {
  background("white");

  sea.velocityX = -2

    if(sea.x < 0){
      sea.x = 400
    }

 
 drawSprites()
}