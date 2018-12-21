var w,h,alpha,beta,gamma;
function startUp(){
	w=windowWidth/100;
	h=windowHeight/100;
}
window.addEventListener('deviceorientation', function(e)
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
function getMX(){
  return mouseX;
 //return map(gamma,-30,30,0,windowWidth);
}
function getMY(){
  return mouseY;
 //return map(beta,-30,30,0,windowWidth);
}
function getMZ(){
  return mouseX;
 //return map(alpha,-30,30,0,windowWidth);
}
function collide(ball,slide){
	 dl=dist(slide.bl.x,slide.bl.y,ball.x,ball.y);
     dr=dist(slide.br.x,slide.br.y,ball.x,ball.y);
	if((ball.x+ball.r/2>slide.x)&&(ball.x+ball.r/2<slide.x+slide.l)&&(ball.y-ball.r/2<slide.y+slide.b)&&(ball.y+ball.r/2>slide.y)||(dl<ball.r+slide.bl.r||dr<ball.r+slide.br.r))
        return true;
    else
    	return false;
}
function checkBounceX(x,ball){
	if(x+ball.r<=0||x+ball.r>=100*w)
		return true;
	else
		return false;

}
function checkBounceY(y,ball){
	if(y>=100*h||y<=0)
		return true;
	else
		return false;
}
function checkPaddle(slide){
	if(slide.y==0||slide.y==97*h)
		return true;
	else
		false;
}
function setHScore(t){

	if(getCookie('highScore')<t)
  setCookie('highScore',t,1);

}
function showGameOver(){
	noStroke();
  background(255,0,0);
  fill(255,255,0);
  textSize(50*w/h);
  textAlign(CENTER);
  text('GAME OVER',50*w,50*h);
  text('Tab to Restart',50*w,70*h);

}
function showScore(t){
fill(125);
stroke(500);
textSize(50*w/h);
text(t, 50*w,50*h);
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie(str) {

  var user = getCookie(str);
  if (user == "") {
    setCookie(str,0,1);
    //alert("Welcome again " + user);

  } else {
		return true;
  //  user = prompt("Please enter your name:", "");
    //if (user != "" && user != null) {
      //setCookie("username", user, 365);
    }
  }

  function levelPassed(l,intro){
    noStroke();
  background(0,255,0);
  fill(255,25,255);
  textSize(50*w/h);
  textAlign(CENTER);
  text('Level Passed ',45*w,30*h);
  text('Next Level is :'+intro,45*w,40*h);
  text('Tap to Play',45*w,50*h);;
  
}
 function levelIntro(l,intro){
    noStroke();
  background(120,0,0);
  fill(255,25,255);
  textSize(50*w/h);
  textAlign(CENTER);
  text(intro,50*w,50*h);
  text('Tab to start '+l,50*w,70*h);
  
}