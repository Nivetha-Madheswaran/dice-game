var ran1=(Math.floor(Math.random()*6)+1);
var randimg1="images/dice"+ran1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg1);


var ran2=(Math.floor(Math.random()*6)+1);
var randimg2="images/dice"+ran2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimg2);


if(ran1===ran2){
    document.querySelector("h1").innerHTML="It's draw";
}
else if(ran1>ran2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
