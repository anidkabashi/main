var button1=document.getElementById('btn1');
var button2=document.getElementById('btn2');
var button3=document.getElementById('btn3');
var button4=document.getElementById('btn4');

button1.onclick=function()
{
    alert('HELLO');
}

button2.onmouseover=function()
{
    alert('hello');
}

button3.onmouseleave=function()
{
    alert('hello');
}

button4.onmousewheel=function()
{
    alert('hello')
}

var firstButton=document.querySelector('button');

firstButton.onclick=function()
{
    alert('hello world!')
}

button3.addEventListener('click', function(){
    alert('hello form digital school')

});

