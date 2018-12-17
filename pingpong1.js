class Ball{
constructor(x,y,r){
this.x=x;
this.y=y;
this.r=r;
this.rr=255
this.g=0
this.b=0

}
create(){
  fill(this.rr,this.g,this.b);
  ellipse(this.x,this.y,this.r*2);
}

move(x){
  this.x=x;
  this.y=y;
}
}
class Bar{
constructor(x,y,l,b){
  this.x=x;
  this.y=y;
  this.l=l;
  this.b=b;
  this.m=0;
  this.bl=new Ball(this.x,this.y+this.b/2,this.b/2)
  this.bl.rr=225;
  this.bl.g=255;
  this.bl.b=0;
  this.br=new Ball(this.x+this.l,this.y+this.b/2,this.b/2)
  this.br.rr=225;
  this.br.g=255;
  this.br.b=0;
}
  create(){
     noStroke();
    fill(255,255,0);
    rect(this.x,this.y,this.l,this.b);
    this.bl.create();
     this.br.create();

    
  }
  move(x,y){
    this.x=x;
    this.y=y;
    this.bl.y=this.y+this.b/2;
    this.bl.x=this.x;
    this.br.y=this.y+this.b/2;
    this.br.x=this.x+this.l;
  }

}
