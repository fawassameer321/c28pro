
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2;
var world,boy;
var slingShot1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	mango1=new mango(1100,100,30);
	
	mango2=new mango(1140,100,30);
	mango3=new mango(1160,150,30);
	mango4=new mango(1180,100,30);
	mango5=new mango(1120,180,30);
 
 stoneObj = new stone(240,400,20)
 slingShot1 = new Slingshot(stoneObj.body,{x:240,y:400});
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function detectcollision (lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}
function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

   
  slingShot1.display();
  groundObject.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2)
  detectcollision(stoneObj,mango3)
  detectcollision(stoneObj,mango4)
  detectcollision(stoneObj,mango5)
}
    
      function mouseDragged(){
        Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
      }
      function mouseReleased(){
        slingShot1.fly()
      }