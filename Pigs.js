class Pig extends Parent
{
    constructor(x,y){
     super(x,y,70,70) 
     this.Image = loadImage("Sprite/enemy.png")
     this.maxSpeed = 255
         }
    display(){
        if (this.body.speed < 3)
        {
            super.display();
        }else 
        {
          World.remove(world,this.body)
          push();
          tint(255,this.maxSpeed)
          image(this.Image,this.body.position.x,this.body.position.y,70,70)
          this.maxSpeed = this.maxSpeed - 5
          pop();
        }
        
    }
}