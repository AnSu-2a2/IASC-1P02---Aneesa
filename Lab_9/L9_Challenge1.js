var start=new Date();

function stopTime(){
    var stop=new Date();
    var seconds=((stop-start)/600);
    alert("You have been on the page for " +seconds +" seconds");
}
