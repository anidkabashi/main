var stundents = ["orgesi", "froni", "avdyl"];

for(i=0;i<stundents.length; i++){
    document.write(stundents[i]+ 'br');
}

var name_input =document.getElementById("name_input");
var btnadd =document.getElementById("btnAdd");
var btnshow = document.getElementById("btnShow");

btnadd.onclick=function(){
    stundents.push(name_input.value);
}

btnshow.onclick=function(){
    for(i=0; i< stundents.length; i++){
        document.write(stundents[i]+ '<br>')
    }
}