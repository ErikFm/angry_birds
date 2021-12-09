const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var CHao

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(830,360,70,70);
    box2 = new Box(990,360,70,70);
    box3 = new Box(830,330,70,70);
    box4 = new Box(990,330,70,70);
    CHao = new Chao(600,390,1200,30);
    porquinho1 = new Porco(910,370);
    porquinho2 = new Porco(910,330);
    madeira1 = new Madeira(910,340,248,PI/2)
    madeira2 = new Madeira(910,310,248,PI/2)
    boxE = new Box(910,310,70,70);
    telhado1 = new Madeira(855,300,110,PI/4);
    telhado2 = new Madeira(960,300,110,PI/-4)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    CHao.display();
    porquinho1.display();
   madeira1.display();
   box3.display();
   box4.display();
   madeira2.display();
   porquinho2.display();
   boxE.display();
   telhado1.display();
   telhado2.display();
}