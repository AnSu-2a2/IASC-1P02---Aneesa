var whatAge=prompt("What is your age?");
var ageNum=Number(whatAge);

var todayDate=new Date();
var year=todayDate.getFullYear();

var birth=year-whatAge;
document.write(birth);