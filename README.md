# Pong_IT
A mature PingPong Game
#This is a Game to be played on android 
#Created using P5 javascript
#And apk-karan  would be done by cordova
******************************************************************************************************************************
#Rules to Add new LEVEL
1.No one will ever change mainFunction.js & pingPong.js (and sound) except permission from master
2.Every level must have mainFunction.js & pingPong.js & L<level number>.js (and sound) in L<level number>.js
3.first check the cookie 'highScore' &'recentTime'
4.After level is passed make a function protottype:
                                                    passLevel(){if(t>20){
                                                       setCookie('level','L2',1);
                                                       levelPassed(1,'Faster');// 'Name of next leve or else commingsoon'
                                                       c=2
                                                        noLoop();
                                                     }
                                                     }
5.
function mouseClicked(){
 if(c==1){
  window.location.href='index.html';
    c=0;
    }
  if(c==2){
  window.location.href=getCookie('level')+'.html';
  }
}                                                    
