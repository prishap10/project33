class snow{
    constructor(x,y,width,height){
        var nihal = {
            "restitution":0.8,
            "friction":1.0,
            "density":1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,nihal)
        this.M = loadImage ("snow5.webp")
        this.w = width
        this.h = height
        World.add(world,this.body)

    }
    display (){
        image(this.M,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}