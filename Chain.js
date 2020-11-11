class Chains
{
    constructor(a,b){
        var constraint_option = {
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:30
          }
          this.chain = Constraint.create(constraint_option)
          this.Sling1 = loadImage("Sprite/sling1.png")
          this.Sling2 = loadImage("Sprite/sling2.png")
          this.Sling3 = loadImage("Sprite/sling3.png")
          World.add(world,this.chain)
    }
    display(){
        
       // imageMode(CENTER)
        image(this.Sling1,300,85)
       // imageMode(CENTER)
       image(this.Sling2,270,85)
       if (this.chain.bodyA != null)
       {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB
        strokeWeight(7)
        stroke("rgb(80,40,36)")
       line (pointA.x-10,pointA.y,pointB.x-10,pointB.y + 15);
       line(pointA.x+10,pointA.y-2,pointB.x+30,pointB.y+ 15);
       if (pointA.x <= 300)
       {
       image(this.Sling3,pointA.x-20,pointA.y-14,10,35)
       } else
       {
        image(this.Sling3,pointA.x+20,pointA.y-14,10,35)   
       }
       }
    }
    birdFly(){
        this.chain.bodyA = null
    }
    birdJoint(a){
        this.chain.bodyA = a
    }
}