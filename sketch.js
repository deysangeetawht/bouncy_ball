
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var angle=60;

function setup()
{
engine=Engine.create();
world=engine.world;

var ball_options={
  restitution:0.95,
  frictionAir:0.01
}

ball=Bodies.circle(100,10,20,ball_options);
World.add(world,ball);

var ground_options={
  isStatic:true
}

ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

fan_options={
  isStatic:true
}
edge=Bodies.rectangle(100,200,100,20,fan_options);
World.add(world,edge);

wall=Bodies.rectangle(300,150,70,10,ground_options);
World.add(world,wall);

  createCanvas(400,400);

}

function draw() 
{
  background(51);
  Engine.update(engine);

  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20)

  Matter.Body.rotate(edge,angle);
  push();
  translate(edge.position.x,edge.position.y);
  rotate(angle);

  rect(0,0,100,20);

  pop();

  angle+=0.1;

  rect(wall.position.x,wall.position.y,70,10);

 
  
}

