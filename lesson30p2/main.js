var wakeuptime;
var dstime;
var sleeptime;
var noon=12;

function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currrentTime= new Date();

    var hours= currrentTime.getHours();
    var minutes=currrentTime.getMinutes();
    var seconds=currrentTime.getSeconds();

    var meridan="AM";

    if(hours >= noon){
        meridan="PM"
    }

    var clockTime=hours + ":" + minutes + ":" + seconds + " "+ meridan;
    clock.innerText=clockTime;
    changeImage();


};

var oneSecond=1000;

setInterval(showCurrentTime,oneSecond);

function changeImage(){
    var time=new Date().getHours;
    console.log(time);

    var image= "ds_clock.png";
    var imageHTML=document.getElementById("timeImage");

    if(time == wakeuptime){
        image="morning.gif";
        console.log("morning");
    }
    else if(time == dstime){
        image="class.gif";
    }
    else if(time == sleeptime){

    }
    imageHTML.src=image;
    console.log(imageHTML.src);
}

function updateClock(){
    var wakeUpTimeSelector=document.getElementById('wakeUpTimeSelector');

    wakeuptime=wakeUpTimeSelector.value;

    var dsTimeSelector=document.getElementById('dsTimeSelector');

    dstime=dsTimeSelector.value;

    var sleepTimeSeletor=document.getElementById('sleepTimeSeletor');

    sleeptime=sleepTimeSeletor.value;

}

var saveButton=document.getElementById("saveButton");

saveButton.addEventListener("click", updateClock);