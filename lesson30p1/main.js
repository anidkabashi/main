var x=1;

if(x > 2){
    console.log("x value is greater than two");
}
else{
    console.log("x value is less than two");
}
var input= document.getElementById('input_id');
var button=document.getElementById('btn_id');
var text=document.getElementById('text_id');


var input1=document.querySelector('#input1_id');
var input1=document.querySelector('#input2_id');
var button2=document.querySelector('#btn2_id');
var ans=document.querySelector('#answer');


button2.addEventListener("click", function(){
    ans.innerHTML=parseInt(input1.value) + parseInt(input2.value);
});

button.onclick=function()
{
    if(input.value >10){
        text.innerHTML="input value is greater than 10";
    }
    else if(input.value <10){
        text.innerHTML="input value is less than 10";
    }
    else{
        text.innerHTML="input value is equal to 10";
    }
}