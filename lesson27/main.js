function showMessage(){
    alert("this message is inside the function");
}

showMessage();

function sum(number1, number2){
    return number1 + number2;
}

console.log(sum(25,5));

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar);
}

dsFunction();

function toCelecius(f){
    return(5/9) * (f-32)
}

console.log("54 fahrenheit is equal to" + toCelecius(54)+"celcius");

var result=toCelecius(54);

console.log("54 fahrenheit is equal to" + result+"celcius");

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(60));

var car= {
    name:"Mercedes",
    color:"white",
    year:2020,
    kilometres:0,
    startEngine : function(){
        alert("testttt");
    },
    get getkilometres(){
        return this.kilometres;
    },
    set setkilometres(km){
        this.kilometres =km;
    }
};

console.log(car.getkilometres);

car.setkilometers=100;

console.log(car.getkilometres);

function Computer(name, CPU){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM
    this.GPU=GPU;
}

var computer1= new Computer("MacBook", "MI 8-CORE", " 8GB", "5600m GPU")
var computer1= new Computer("dell", "MI 8-CORE", " 8GB", "5600m GPU")
var computer1= new Computer("lenovo", "MI 8-CORE", " 1GB", "5600m GPU")