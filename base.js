class base{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
         density:1.2
        ,
        friction:0.3,
        restitution:0.3
        }
       this.x = x
       this.y = y
       this.width = width
       this.height = height
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
   display(){
         var pos = this.body.position
        push()
         
         rotate(this.body.angle)
         fill("red")
         rect(pos.x,pos.y,150,15)
         pop()



   }
}