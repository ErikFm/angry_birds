class rest {
    constructor(bodyA,pointB){
        var op ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB=pointB;
        this.rest=Matter.Constraint.create(op);
        World.add(world,this.rest);
    }
    fly(){
    this.rest.bodyA=null;    
    }
    
    display(){
        if(this.rest.bodyA){
        strokeWeight(4);
        line(this.rest.bodyA.position.x,this.rest.bodyA.position.y,this.rest.pointB.x,this.rest.pointB.y);
        }
    }
}