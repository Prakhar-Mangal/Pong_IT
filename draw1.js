var c=0 ,t=0,gamma;
var w,h;
var slides=[];
var ball,a=4,b=4,x=200,y=300;
var slide1,slde2,slide3,socket;
var pong,gameover;
function preload(){
  soundFormats('mp3', 'ogg');
  pong = loadSound('pong.mp3');
  gameover=loadSound('Gameover.mp3');
}
function setup(){
  w=windowWidth/100;
  h=windowHeight/100;
 createCanvas(100*w,100*h);
ball =new Ball(50*w,50*h,20*w/h);
slide1=new Bar(25*w,97*h,25*w,3*h);
slide2=new Bar(25*w,0,25*w,3*h);
slides.push(slide1);
slides.push(slide2);
}

function draw(){
background(25);
showScore(t);
ball.create();
i=0;
slides.forEach(slide => {
  slide.create();
  if(!(checkPaddle(slide))){
    if(slide.x>100*w){
      slides.splice(i,1);    
  }
    else{
  slide.move(slide.x);
  slide.x+=2;}
}
  else{
    var xx=map(gamma,-30,30,0,windowWidth);
    slide.move(mouseX);
  }

i++;
});

x+=a;
y+=b;
if(checkBounceX(w,ball)){
  pong.play();
  a=-a;
}

if(checkBounceY(h)){
  showGameOver();
  c=1;
  t=0;
  gameover.play();
  noLoop();
}

ball.move(x,y);

slides.forEach(slide => {
if(collide(ball,slide)){
	  b=-b;
      if(b<=0){y=y-4*h}
      if(b>0){y=y+4*h}
      ball.rr=random(255);
      ball.g=random(255);
      ball.b=random(255);
      pong.play();
}
});
}

function mouseClicked(){
//window.location.href='hello.html';

 if(c==1){
    location.reload();
    c=0;
  }

}
/*function collide(){
  
  slides.forEach(slide => {
    dl=dist(slide.bl.x,slide.bl.y,ball.x,ball.y);
dr=dist(slide.br.x,slide.br.y,ball.x,ball.y);
    if((ball.x+ball.r/2>slide.x)&&(ball.x+ball.r/2<slide.x+slide.l)&&(ball.y-ball.r/2<slide.y+slide.b)&&(ball.y+ball.r/2>slide.y)||(dl<ball.r+slide.bl.r||dr<ball.r+slide.br.r))
    {b=-b;
      if(b<=0){y=y-4*h}
      if(b>0){y=y+4*h}
      ball.rr=random(255);
      ball.g=random(255);
       ball.b=random(255);
       pong.play();
}


});

}*/
  
setInterval(function(){
  t++;
  if(t%2===0){
  //sliden1=new  Bar(random(-10,-5)*w,random(30,70)*h,random(10,25)*w,3*h);
  //slides.push(sliden1);
}
},1000);
window.addEventListener('deviceorientation', function(e) 
{
  //alpha = e.alpha;
 // beta = e.beta;
  gamma = e.gamma;
});