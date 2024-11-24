var one=Number(document.getElementById("num1").value);
var two=Number(document.getElementById("num2").value);
var three=one+two;
var four=one-two;
var five=one*two;
var six=one/two;

function sum(){

    document.getElementById("output").innerHTML=three;
}

function diff(){

    document.getElementById("output").innerHTML=four;
}

function product(){

    document.getElementById("output").innerHTML=five;
}

function quotient(){

    document.getElementById("output").innerHTML=six;
}
