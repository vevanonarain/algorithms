var rect,movingrect;
function setup() {
  createCanvas(800,400);
  rect=createSprite(700, 200, 50, 50);
  movingrect=createSprite(50,200,80,30);
  movingrect.shapeColor="green";
  rect.shapeColor="green";
  movingrect.velocityX=5;
  rect.velocityX=-5;
}

function draw() {
  background(255,255,255);  
  if(movingrect.x-rect.x<movingrect.width/2+rect.width/2 &&rect.x-movingrect.x<movingrect.width/2+rect.width/2){
  movingrect.velocityX=movingrect.velocityX*(-1);
  rect.velocityX=rect.velocityX*(-1);
  }
  drawSprites();
}