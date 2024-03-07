function merge(value1,value2,key){
    return value1*(1-key)+value2*key
}
function regTriangle(layer,x,y,radiusX,radiusY,direction){
    layer.triangle(x+sin(direction)*radiusX,y+cos(direction)*radiusY,x+sin(direction+120)*radiusX,y+cos(direction+120)*radiusY,x+sin(direction-120)*radiusX,y+cos(direction-120)*radiusY)
}
function regPoly(layer,x,y,sides,radiusX,radiusY,direction){
    layer.beginShape()
    for(let a=0,la=sides;a<la;a++){
        layer.vertex(x+sin(a/la*360+direction)*radiusX,y+cos(a/la*360+direction)*radiusY)
    }
    layer.endShape(CLOSE)
}
function regStar(layer,x,y,sides,radiusX,radiusY,radius2X,radius2Y,direction){
	layer.beginShape()
	for(k=0;k<sides*2;k++){
		layer.vertex(x+sin(direction+k*180/sides)*(k%2==0?radiusX:radius2X),y+cos(direction+k*180/sides)*(k%2==0?radiusY:radius2Y))
	}
	layer.endShape(CLOSE)
}
function diamond(layer,x,y,width,height){
    layer.quad(x-width/2,y,x,y-height/2,x+width/2,y,x,y+height/2)
}
function setupBase(){
    colorMode(RGB,255,255,255,1)
    angleMode(DEGREES)
    rectMode(CENTER)
    imageMode(CENTER)
    textAlign(CENTER,CENTER)
    noStroke()
}
function setupLayer(layer){
    layer.colorMode(RGB,255,255,255,1)
    layer.angleMode(DEGREES)
    layer.rectMode(CENTER)
    layer.imageMode(CENTER)
    layer.textAlign(CENTER,CENTER)
    layer.noStroke()
}