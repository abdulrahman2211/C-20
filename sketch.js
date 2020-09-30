var movingrect,fixedrect
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(300, 200, 50, 50);
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2)
    {
      movingrect.shapeColor = "orange"
      fixedrect.shapeColor = "orange"
    }
    else{
      movingrect.shapeColor= "green"
      fixedrect.shapeColor = "green"
    }
  drawSprites();
}