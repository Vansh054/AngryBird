class Bird extends Parent
{
    constructor(x,y){
     super(x,y,55,55) 
     this.Image = loadImage("Sprite/bird.png") 
     this.Simage = loadImage("Sprite/smoke.png")
     this.Smoke = []
    }
    display(){
        super.display()
        if (this.body.velocity.x > 20 && this.body.position.x >200 && this.body.position.y >=150)
        {
            var Position = [this.body.position.x,this.body.position.y]
            this.Smoke.push(Position);
        }
        for (var i=0;i < this.Smoke.length;i++)
        {
            image (this.Simage,this.Smoke[i][0],this.Smoke[i][1])
        }
        console.log(this.body.velocity.x)
    }
}