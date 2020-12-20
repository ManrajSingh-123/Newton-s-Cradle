class Roof {
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        

    }
    

    display(){ 
        var point= this.body.position;
        var height=this.height;
        var width=this.width;


        rectMode(CENTER)
        fill("grey");
        rect(point.x,point.y,width,height)

    }
}
