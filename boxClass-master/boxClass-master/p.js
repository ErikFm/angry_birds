class Porco extends ElemenX{
    constructor(x, y) {
      super (x, y,70,70);
      this.image = loadImage("pig.png");
        this.visiblity=255
    }
    display(){
      if (this.body.speed<3){
        super.display();
      }else{
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-4;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
        pop();
      }
    }
  };
  