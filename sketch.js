const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;


function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;
	

	ceiling = new Ceiling(400,25,800,50);

	ball1 = new Ball(350,350,100);

	chain1 = new Chain(ball1,ceiling,0,ceiling.height/2);


	Engine.run(engine);
}


function draw() {
    background("lightgray");


	ceiling.display();
	
	ball1.display();
}



