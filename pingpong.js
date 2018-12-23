class Ball{
constructor(x,y,r){
this.x=x;
this.y=y;
this.r=r;
this.rr=255;
this.gg=0;
this.bb=0;

}
create(){
  fill(this.rr,this.gg,this.bb);
  ellipse(this.x,this.y,this.r*2);
}

move(x,y){
  this.x=x;
  this.y=y;
}
updateColor(r,g,b){
 this.rr=r;
 this.gg=g;
 this.bb=b;
  }
}
class Bar{
constructor(x,y,l,b){
  this.x=x;
  this.y=y;
  this.l=l;
  this.b=b;
  this.m=0;
  this.rr=255;
  this.gg=255;
  this.bb=0;

  this.bl=new Ball(this.x,this.y+this.b/2,this.b/2)
  this.bl.rr=225;
  this.bl.gg=255;
  this.bl.bb=0;
  this.br=new Ball(this.x+this.l,this.y+this.b/2,this.b/2)
  this.br.rr=225;
  this.br.gg=255;
  this.br.bb=0;
}
  create(){
     noStroke();
    fill(this.rr,this.gg,this.bb);
    rect(this.x,this.y,this.l,this.b);
    this.bl.create();
     this.br.create();
   }
   updateColor(r,g,b){
    this.rr=r;
    this.gg=g;
    this.bb=b;
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
