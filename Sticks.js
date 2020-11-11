class Sticks extends Parent
{
    constructor(x,y,h,a){
      super(x,y,20,h)
      Matter.Body.setAngle(this.body,a) 
      this.Image = loadImage("Sprite/wood2.png")
    }
    
}