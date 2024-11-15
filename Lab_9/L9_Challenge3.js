function sum(){
    var one=Number(document.getElementById("number1").value);
    var two=Number(document.getElementById("number2").value);
    var three=one+two;
    document.getElementById("output").innerHTML=three;
    console.log(three);
}