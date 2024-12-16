//Page 1 (Why did the chicken cross the road), Random number generation and content output
var Left="A4_Photos/Left.png";
var Right="A4_Photos/Right.png";

function Cross1(){
    var Cross=Math.floor(Math.random()*2)

if(Cross%2){
    var WhatSide=Left;
    document.getElementById("Chicken1").innerHTML="The first chicken is on the left side"}
    //Tutorialspoint. (n.d.) How to determine if a number is odd or even in Javascript? Retrieved December 15, 2024, from https://www.tutorialspoint.com/how-to-determine-if-a-number-is-odd-or-even-in-javascript

else{
    var WhatSide=Right;
    document.getElementById("Chicken1").innerHTML="The first chicken is on the right side"}

document.getElementById('Chicken1Photo').src=WhatSide;
//[Clocher Zhong].(2018, November 12). How do I show a conditional image based on variable? [online forum post]. Stack overflow. https://stackoverflow.com/questions/53262006/how-do-i-show-a-conditional-image-based-on-variable
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

//Page 2 (3 Tricky Word Riddles) Answer button
function Answer1(){
    document.getElementById("Show1").innerHTML="The Letter M";
    console.log(Show1);
}

function Answer2(){
    document.getElementById("Show2").innerHTML="The Word Wrong";
    console.log(Show2);
}

function Answer3(){
    document.getElementById("Show3").innerHTML="The Word Short";
    console.log(Show3);
}

//Page 3 (Green Glass Door) Random Number Generation and content output
function RandNum(){
    var gift=(Math.floor(Math.random()*11));
    console.log(gift);

    if (gift==1){
         document.getElementById("Object1").innerHTML="Alligator";
        document.getElementById("Object2").innerHTML="Crocodile";
        var ChosenGift="A4_Photos/Alligator.png";
    }

    else if (gift==2){
        document.getElementById("Object1").innerHTML="Apple";
        document.getElementById("Object2").innerHTML="Fruit";
        var ChosenGift="A4_Photos/Apple.png";
    }

    else if (gift==3){
        document.getElementById("Object1").innerHTML="Book";
        document.getElementById("Object2").innerHTML="Novel";
        var ChosenGift="A4_Photos/Book.png";
    }

    else if (gift==4){
        document.getElementById("Object1").innerHTML="Cartoon";
        document.getElementById("Object2").innerHTML="Illustration";
        var ChosenGift="A4_Photos/Cartoon.png";
    }

    else if (gift==5){
        document.getElementById("Object1").innerHTML="Glitter";
        document.getElementById("Object2").innerHTML="Sparkle";
        var ChosenGift="A4_Photos/Glitter.png";
    }

    else if (gift==6){
        document.getElementById("Object1").innerHTML="Mitten";
        document.getElementById("Object2").innerHTML="Glove";
        var ChosenGift="A4_Photos/Mitten.png";
    }

    else if (gift==7){
        document.getElementById("Object1").innerHTML="Parallelogam";
        document.getElementById("Object2").innerHTML="Quadrilateral";
        var ChosenGift="A4_Photos/Parallelogram.png";
    }

    else if (gift==8){
        document.getElementById("Object1").innerHTML="Puzzle";
        document.getElementById("Object2").innerHTML="Jigsaw";
        var ChosenGift="A4_Photos/Puzzle.png";
    }

    else if (gift==9){
        document.getElementById("Object1").innerHTML="Slipper";
        document.getElementById("Object2").innerHTML="Shoe";
        var ChosenGift="A4_Photos/Slipper.png";
    }

    else {
        document.getElementById("Object1").innerHTML="Tool";
        document.getElementById("Object2").innerHTML="Utensil";
        var ChosenGift="A4_Photos/Tool.png";
    }

    document.getElementById('gift').src=ChosenGift;
    //[Clocher Zhong].(2018, November 12). How do I show a conditional image based on variable? [online forum post. Stack overflow. https://stackoverflow.com/questions/53262006/how-do-i-show-a-conditional-image-based-on-variable
    //Anon. (n.d.) If / else errors – learn how to fix these. [online forum post]. Codecademy.com. Retrieved December 14th, 2024, from https://www.codecademy.com/forum_questions/52373a75548c3515940000dc#52537b7eabf821afaa003829
}