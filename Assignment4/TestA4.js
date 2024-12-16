var Left="A4_Photos/Left.png";
var Right="A4_Photos/Right.png";

function Cross1(){
    var Cross=Math.floor(Math.random()*2)

if(Cross%2){
    var WhatSide=Left;
    document.getElementById("Chicken1").innerHTML="The first chicken is on the left side"}

else{
    var WhatSide=Right;
    document.getElementById("Chicken1").innerHTML="The first chicken is on the right side"}

document.getElementById('Chicken1Photo').src=WhatSide;

}

function Cross2(){
    var Cross=Math.floor(Math.random()*2)

if(Cross%2){
    var WhatSide=Left;
    document.getElementById("Chicken2").innerHTML="The second chicken is on the left side"}

else{
    var WhatSide=Right;
    document.getElementById("Chicken2").innerHTML="The second chicken is on the right side"};

document.getElementById('Chicken2Photo').src=WhatSide;

}

function Cross3(){
    var Cross=Math.floor(Math.random()*2)

if(Cross%2){
    var WhatSide=Left;
    document.getElementById("Chicken3").innerHTML="The third chicken is on the left side"}

else{
    var WhatSide=Right;
    document.getElementById("Chicken3").innerHTML="The third chicken is on the right side"};

document.getElementById('Chicken3Photo').src=WhatSide;

}
