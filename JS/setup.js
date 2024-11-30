function preload(){
    if(display.type==91){
        graphics.i1=loadImage('../Assets/SSTemplate.png')
    }
}
function setup(){
    setupBase()
    graphics.main=setupImage(display.type)
    createCanvas(graphics.main.width,graphics.main.height)
    if(graphics.main!=0){
        fill(150)
        rect(graphics.main.width/2,graphics.main.height/2,graphics.main.width,graphics.main.height)
        image(graphics.main,graphics.main.width/2,graphics.main.height/2)
    }
}