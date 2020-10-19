
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 100);
	ground = new Ground(width/2, 450, width, 20);
	box = new Box();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  drawSprites();

 
  ground.display();
  box.display();
  ball.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:137, y:-137});
	}
}



