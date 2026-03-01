function preload(){
    /*if(display.type==91){
        graphics.i1=loadImage('../Assets/SSTemplate.png')
    }
    if(display.type==196){
        graphics.i1=loadImage('../Assets/turriers.png')
        graphics.i2=loadImage('../Assets/valensole.png')
    }*/
}
function setup(){
    setupBase()
    graphics.main=[]
    display.type.forEach(type=>graphics.main.push(setupImage(type)))
    createCanvas(graphics.main.reduce((acc,item)=>acc+item.width,0),graphics.main.reduce((acc,item)=>max(acc,item.height),0))
    if(graphics.main.length>0){
        fill(150)
        rect(width/2,height/2,width,height)
        let tick=0
        for(let a=0,la=graphics.main.length;a<la;a++){
            image(graphics.main[a],graphics.main[a].width/2+tick,height/2)
            tick+=graphics.main[a].width
        }
    }
}
function saveAll(){
    graphics.main.forEach(item=>save(item))
}