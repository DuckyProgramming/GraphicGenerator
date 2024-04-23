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