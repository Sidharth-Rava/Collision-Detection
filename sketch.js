var fixedRect;

var movingRect;

function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(300,300,50,100);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(50,100,50,100);
  movingRect.shapeColor = "red";
  
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);

  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2  
    ){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  
  drawSprites();
}