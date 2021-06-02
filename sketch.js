
function preload() {
    //load the images here
bg = loadImage("images/garden.png");
tomimage1 = loadAnimation("images/cat1.png");
jerryimage1 = loadAnimation("images/mouse1.png");
tomimage2 = loadAnimaation("images/tom2.png","images/tomthree.png");
jerryimage2 = loadAnimation("images/jerry2.png","images/jerry3.png");
tomimage3 = loadAnimation("images/tom4.png");
jerryimage3 = loadAnimation("images/jerry4.png")
}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

tom = createSprite(870,600);
tom.addAnimation("tomsleeping",tomimage1);
tom.scale=0.2;

jerry = createSprite(200,600);
jerry.addAnimation("jerrystanding",jerryimage1);
jerry.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x < (tom.width-jerry.width)/2) {
    
tom.velocityX=0;
tom.addAnimation("tomLastImage", tomimage3);
tom.x=300;
tom.scale=0.2;
tom.changeAnimation("jerryLastImage", jerryimage3);
jerry.scale=0.15;
jerry.changeAnimation("jerryLastImage");





}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keycode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning", tomimage2);
      removeEventListener.changeAnimation("tomRunning");

      jerry.addAnimtion("jerryTeasing", jerryimage2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");
  }

}
