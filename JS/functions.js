p5.Gradient=class{
	constructor(){}
	setAngle(angle){
		if(_angleMode=="degrees"){
			this.angle=radians(angle)
		}else{
			this.angle=angle
		}
	}
	colors(){
		let stops
		if(Array.isArray(arguments[0])){
			stops=arguments[0]
		}else{
			stops=arguments
		}
		for(let a=0,la=stops.length;a<la;a+=2){
			const pos=stops[a]
			const col=stops[a+1].toString()
			this.gradient.addColorStop(pos,col)
		}
	}
}
p5.LinearGradient=class LinearGradient extends p5.Gradient{
	constructor(angle,width){
		super()
		this.setAngle(angle||0)
		this.width=width||100
		const x=cos(this.angle)*this.width
		const y=sin(this.angle)*this.width
		this.gradient=drawingContext.createLinearGradient(0,0,x,y)
	}
}
p5.RadialGradient=class RadialGradient extends p5.Gradient{
	constructor(innerRadius,outerRadius,x,y){
		super()
		this.innerRadius=innerRadius||0
		this.outerRadius=outerRadius||100
		this.x=x||0
		this.y=y||0
		this.gradient=drawingContext.createRadialGradient(this.x,this.y,this.innerRadius,this.x,this.y,this.outerRadius)
	}
}
p5.ConicGradient=class ConicGradient extends p5.Gradient{
	constructor(angle,x,y){
	  super()
	  this.setAngle(angle||0)
	  this.x=x||0
	  this.y=y||0
	  this.gradient=drawingContext.createConicGradient(this.angle,this.x,this.y)
	}
}
p5.prototype.createLinearGradient=function(angle,width){
	return new p5.LinearGradient(angle,width)
}
p5.prototype.createConicGradient=function(angle,x,y){
	return new p5.ConicGradient(angle,x,y)
}
p5.prototype.createRadialGradient=function(innerRadius,outerRadius,x,y){
	return new p5.RadialGradient(innerRadius,outerRadius,x,y)
}
p5.prototype.createPattern=function(patternElement,repeat){
	if(patternElement.canvas){
		patternElement=patternElement.canvas
	}else if(patternElement.elt){
		patternElement=patternElement.elt
	}
	return this.drawingContext.createPattern(patternElement,repeat||"repeat")
}
p5.prototype.createSimplePattern=(func,w,h,repeat)=>{ 
	let buffer=this.createGraphics(w||5,h||5)
	buffer.pixelDensity(1)
	buffer.background(255)
	func(buffer)
	return this.drawingContext.createPattern(buffer.canvas,repeat||"repeat")
}
p5.prototype.fillGradient=function(gradient){
	this.drawingContext.fillStyle=gradient.gradient?gradient.gradient:gradient
}
p5.prototype.strokeGradient=function(gradient){
	this.drawingContext.strokeStyle=gradient.gradient?gradient.gradient:gradient
}
p5.prototype.backgroundPattern=function(pattern){
	this.drawingContext.fillStyle=pattern
	this.drawingContext.fillRect(0,0,width,height)
}
function merge(value1,value2,key){
    return value1*(1-key)+value2*key
}
function mergeColor(color1,color2,value){
	return [color1[0]*(1-value)+color2[0]*value,color1[1]*(1-value)+color2[1]*value,color1[2]*(1-value)+color2[2]*value]
}
function RGBtoHSV(r,g,b){
	let minV=min(r,g,b)
	let maxV=max(r,g,b)
    let h,s=0
    let v=maxV
	let delta=maxV-minV
	if(maxV!=0){
		s=delta/maxV
        h=r==maxV?(g-b)/delta:g==maxV?2+(b-r)/delta:4+(r-g)/delta
        h*=60
        if(h<0){
            h+=360
        }
    }else{
		s=0
		h=-1
	}
    return [h,s,v]
}
function HSVtoRGB(h,s,v){
	let i,f,p,q,t,r,g,b=0
	if(s==0){
		r,g,b=v
	}
	h/=60
	i=floor(h)
	f=h-i
	p=v*(1-s)
	q=v*(1-s*f)
	t=v*(1-s*(1-f))
	switch(i){
		case 0:
			r=v
			g=t
			b=p
		break
		case 1:
			r=q
			g=v
			b=p
		break
		case 2:
			r=p
			g=v
			b=t
		break
		case 3:
			r=p
			g=q
			b=v
		break
		case 4:
			r=t
			g=p
			b=v
		break
		default:
			r=v
			g=p
			b=q
		break
	}
    return [r,g,b]
}
function mergeColorHSV(color1,color2,value){
    let color1f=RGBtoHSV(color1[0],color1[1],color1[2])
    let color2f=RGBtoHSV(color2[0],color2[1],color2[2])
    if(abs(color1f[0]-color2f[0])<90){
        return HSVtoRGB(color1f[0]*(1-value)+color2f[0]*value,color1f[1]*(1-value)+color2f[1]*value,color1f[2]*(1-value)+color2f[2]*value)
    }else if(color2f[0]>color1f[0]){
        return HSVtoRGB((color1f[0]*(1-value)+(color2f[0]-360)*value+360)%360,color1f[1]*(1-value)+color2f[1]*value,color1f[2]*(1-value)+color2f[2]*value)
    }else if(color2f[0]<color1f[0]){
        return HSVtoRGB((color1f[0]*(1-value)+(color2f[0]+360)*value)%360,color1f[1]*(1-value)+color2f[1]*value,color1f[2]*(1-value)+color2f[2]*value)
    }
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
function pentagon(layer,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){
	layer.beginShape()
	layer.vertex(x1,y1)
	layer.vertex(x2,y2)
	layer.vertex(x3,y3)
	layer.vertex(x4,y4)
	layer.vertex(x5,y5)
	layer.endShape(CLOSE)
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