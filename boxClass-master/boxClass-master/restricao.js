class rest {
    constructor(bodyA,pointB){
        var op ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");
        this.pointB=pointB;
        this.rest=Matter.Constraint.create(op);
        World.add(world,this.rest);
    }
    fly(){
    this.rest.bodyA=null;    
    }
    atac(body){
        this.rest.bodyA=body;
    }
    display(){
        image(this.sling1,300,20);
        image(this.sling2,270,20);
        if(this.rest.bodyA){
        strokeWeight(7);
        stroke(48,22,8);
        line(this.rest.bodyA.position.x-20,this.rest.bodyA.position.y,this.rest.pointB.x-20,this.rest.pointB.y+20);
        line(this.rest.bodyA.position.x-20,this.rest.bodyA.position.y,this.rest.pointB.x+20,this.rest.pointB.y+10);
        image(this.sling3,this.rest.bodyA.position.x-30,this.rest.bodyA.position.y-10,15,30);
        }
    }
}