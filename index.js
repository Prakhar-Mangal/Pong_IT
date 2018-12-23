var l1,l2,l3,l4,l5,l6,l7;
function setup(){
  startUp();
 l1=new Ball(10*w,60*h,40*w/h);
 l2=new Ball(50*w,60*h,40*w/h);
 l3=new Ball(90*w,60*h,40*w/h);
 l4=new Ball(10*w,75*h,40*w/h);
 l5=new Ball(50*w,75*h,40*w/h);
 l6=new Ball(90*w,75*h,40*w/h);
 l7=new Ball(50*w,90*h,40*w/h);
  createCanvas(100*w,100*h);
  background(0);
  checkCookie('highScore');
  checkCookie('recentTime');
  checkCookie('level');
}
function draw(){
  noStroke();
  //background(0);
  l1.create();l2.create();l3.create();l4.create();l5.create();l6.create();l7.create();
  textSize(l1.r/1.5);  
  fill(255,255,0);
  textSize(40*w/h);
  textAlign(CENTER);
  text('High-Score: '+getCookie('highScore'),45*w,30*h);
  text('Latest-Score: '+getCookie('recentTime'),45*w,40*h);
  text('Level: '+getCookie('level'),45*w,50*h);
  fill(255,255,0);
  text('L1',l1.x,l1.y+2*h);
  text('L2',l2.x,l2.y+2*h);
  text('L3',l3.x,l3.y+2*h);
  text('L4',l4.x,l4.y+2*h);
  text('L5',l5.x,l5.y+2*h);
  text('L6',l6.x,l6.y+2*h);
  text('L7',l7.x,l7.y+2*h);
  noLoop();
}
function mousePressed(){
  var d=dist(l1.x,l1.y,mouseX,mouseY);
  if(d<l1.r)
   window.location.href='L1.html';
   var d=dist(l2.x,l2.y,mouseX,mouseY);
  if(d<l2.r)
   window.location.href='L2.html';
   var d=dist(l3.x,l3.y,mouseX,mouseY);
  if(d<l3.r)
   window.location.href='L3.html';
   var d=dist(l4.x,l4.y,mouseX,mouseY);
  if(d<l4.r)
   window.location.href='L4.html';
   var d=dist(l5.x,l5.y,mouseX,mouseY);
  if(d<l5.r)
   window.location.href='L5.html';
   var d=dist(l6.x,l6.y,mouseX,mouseY);
  if(d<l6.r)
   window.location.href='L6.html';
   var d=dist(l7.x,l7.y,mouseX,mouseY);
  if(d<l7.r)
   window.location.href='L7.html';
}

