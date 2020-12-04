class box{
     constructor(x,y){
         var options ={
             isStatic:false,
             restitution:0.05,
             friction:0.3
         }
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x,y,20,30,options)
        World.add(world,this.body)
     }
    display(){
          var pos = this.body.position
         push()
          rotate(this.body.angle)
          fill("green")
          rect(pos.x,pos.y,20,30)
          pop()



    }
}