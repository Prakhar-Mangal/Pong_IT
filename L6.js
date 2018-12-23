var c=0 ,t=0;
var slides=[];
var ball,a=4,b=4,x=200,y=300;
var balln,an=3,bn=3,xn=100,yn=200;
var slide1,slide2,slide3,socket;
var pong,gameover;
function preload(){
  soundFormats('mp3', 'ogg');
  pong = loadSound('pong.mp3');
  gameover=loadSound('Gameover.mp3');
}
function setup(){
  startUp();
checkCookie('highScore');
checkCookie('recentTime');
  print(getCookie('recentTime'));

    print('high-'+getCookie('highScore'));
  createCanvas(100*w,100*h);
  ball =new Ball(50*w,50*h,20*w/h);
  balln =new Ball(50*w,50*h,20*w/h);
  slide1=new Bar(25*w,97*h,25*w,3*h);
  slide2=new Bar(25*w,0,25*w,3*h);
  slides.push(slide1);
  slides.push(slide2);
}

function draw(){
background(25);
showScore(t);
ball.create();
if(t>2){
balln.create();
balln.updateColor(255,255,255);
}
i=0;
slides.forEach(slide => {
  slide.create();
  if(!(checkPaddle(slide))){
    if(slide.x>100*w){
      slides.splice(i,1);
  }
    else{
  slide.move(slide.x,slide.y);
  slide.x+=2;}
}
  else{

    slide.move(getMX(),slide.y);
  }

i++;
});

x+=a;
y+=b;
xn+=an;
yn+=bn;
if(collide(balln,slide1)||collide(balln,slide2)){
  showGameOver();
  setCookie('recentTime',t,1);
  setHScore(t);
  c=1;
  t=0;
  gameover.play();
  noLoop();
}
if(checkBounceX(x,ball)){
  pong.play();
  a=-a;
}
if(checkBounceX(xn,balln)){
  pong.play();
  an=-an;
}
if(checkBounceY(yn,balln)){
  bn=-bn;
}
if(checkBounceY(y,ball)){
  showGameOver();
  setCookie('recentTime',t,1);
  setHScore(t);
  c=1;
  t=0;
  gameover.play();
  noLoop();
}
ball.move(x,y);
balln.move(xn,yn);
slides.forEach(slide => {
if(collide(ball,slide)){
	  b=-b;
      if(b<=0){y=y-4*h}
      if(b>0){y=y+4*h}
      ball.updateColor(random(255),random(255),random(255));
      pong.play();
}
if(collide(balln,slide)){
	  bn=-bn;
      if(bn<=0){yn=yn-4*h}
      if(bn>0){yn=yn+4*h}
      pong.play();
}
});
passLevel();
}
function passLevel(){
  if(t>20){
    setCookie('level','L7',1);
    levelPassed(6,'Ports r open');
    c=2
     noLoop();
  }
  }
function mouseClicked(){
//window.location.href='hello.html';
 if(c==1){
  window.location.href='index.html';
    c=0;

  }
  if(c==2){
  window.location.href=getCookie('level')+'.html';

  }

}
setInterval(function(){
  t++;
  if(t%2==0){
      //window.location.href='index.html';
  sliden1=new  Bar(random(-10,-5)*w,random(30,70)*h,random(10,25)*w,3*h);
  slides.push(sliden1);
}
},1000);

