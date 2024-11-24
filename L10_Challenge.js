function plus(){
    var one=Number(document.getElementById("box1").value);

    var two=Number(document.getElementById("box2").value);

    var three=one+two;
    document.getElementById("output").innerHTML=three;
    console.log(three)
}

function minus(){
    var one=Number(document.getElementById("box1").value);

    var two=Number(document.getElementById("box2").value);

    var four=one-two;
    document.getElementById("output").innerHTML=four;
    console.log(four);
}

function multiply(){
    var one=Number(document.getElementById("box1").value);

    var two=Number(document.getElementById("box2").value);

    var five=one*two;
    document.getElementById("output").innerHTML=five;
    console.log(five);
}

function divide(){
    var one=Number(document.getElementById("box1").value);

    var two=Number(document.getElementById("box2").value);

    var six=one/two;
    document.getElementById("output").innerHTML=six;
    console.log(six);
}