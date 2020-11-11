const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var gameState = "onSling"
var box1, box2, box3, box4, box5, ground, pig1, pig2, stick1, stick2, stick3, stick4, stick5, bird, BackG, platform;

function preload(){
  BackG = loadImage("Sprite/bg.png")
  //background(BackG)
  determineBackground();
  }
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box( 800,500,80,80)
  box2 = new Box(1000,500,80,80)
  box3 = new Box( 800,455,80,80)
  box4 = new Box(1000,455,80,80)
  box5 = new Box( 900,410,80,80)
  ground = new Ground(600,600,1200,50)
  platform = new Ground(150,455,400,350)
  pig1 = new Pig(900,500)
  pig2 = new Pig(900,455)
  stick1 = new Sticks(900,480,280,PI/2)
  stick2 = new Sticks(900,435,280,PI/2)
  stick3 = new Sticks(850,390,180,PI/4)
  stick4 = new Sticks(960,390,180,-PI/4)
  bird = new Bird(200,200)
  rope = new Chains(bird.body,{x:295,y:100})
  console.log(bird.body)
  }

function draw() {
  if (BackG)
  background(BackG);
  else{
    BackG = loadImage("Sprite/bg.png")
    background(BackG)
  }
  Engine.update(engine);
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  ground.display()
  platform.display()
  pig1.display()
  pig2.display()
  stick1.display()
  stick2.display()
  stick3.display()
  stick4.display()
  bird.display()
  rope.display()
  }

function mouseDragged(){
  if (gameState == "onSling")
  {
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased(){
  rope.birdFly()
  gameState = "Launched"
}
function keyPressed(){
  if (keyCode == 32)
  {
    bird.Smoke = []
    Matter.Body.setPosition(bird.body,{x:295,y:100})
    console.log("hi")
    rope.birdJoint(bird.body)
    gameState = "onSling"
  }
}

async function determineBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data = await response.json()
  var dateTime = data.datetime
  var hour = dateTime.slice(11,13)
  console.log(hour)
  if (hour > 6 && hour < 16)
  {
    BackG = loadImage("Sprite/bg2.jpg")
  }
  else
  {
    BackG = loadImage("Sprite/bg.png")
  }
}