
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var PAPEL


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	PAPEL = new PAPER(100,640,30,30);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  keypressed();
  
  
  

 

  groundObject.display();
  dustbinObj.display();
  PAPEL.display();

}
function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(PAPEL.body,PAPEL.body.position,{x:20, y:-110});
	  }
}
