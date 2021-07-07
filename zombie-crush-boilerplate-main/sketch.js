const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var ground,leftWall,rightWall;
var jointPoint;
var jointLink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height-10,width*2,20);
  leftWall = new Base(300,height/2+50,200,100);
  rightWall = new Base(width-300,height/2+50,200,100);
  bridge = new Bridge(15,{x:width/2-400,y:height/2});
  jointPoint = new Base(width-600,height/2+10,40,20);

  Matter.composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint);

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  leftWall.show();
  rightWall.show();
  bridge.show();





}
