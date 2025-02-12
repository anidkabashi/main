var input= document.getElementById('input_id');
var button=document.getElementById('btn_id');
var text=document.getElementById('text_id');



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