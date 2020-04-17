//declare function
function digitalclock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = "AM";

    if(hours===0){
        hours = 12;
    }
    if(hours > 12){
        hours-=12;
        timeFormat = "PM"}
    hours = hours < 10 ? '0' + hours :hours;
    seconds = seconds < 10 ? '0' + seconds : seconds; 

    let finalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;

    // set inervel for  1sec
    setInterval(digitalclock,1000);

}

digitalclock(); //function call

