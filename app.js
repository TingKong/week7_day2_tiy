var a;
var b;
var c;
var d;
var e;

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;

var car1 = "mercedes";
var car2 = "lexus";
var car3 = "audi";
var car4 = "range rover";
var car5 = "porsche";

var love = true;
var trump = false;
var food = true;
var movetable = false;
var losing = false;

var a = 20;
var b = 20;
var c = a + b;
console.log(c);

var life = true;
if(life){
    console.log("it is " + life + " life is beautiful!")
} else{
    console.log("This statement is false")
}

for (var i = 0; i < 11; i++){
    console.log(i);
}

//SWITCH STATEMENTS
var a = 3;
switch(a){
    case 1:
    console.log("a");
    break;

    case 2:
        console.log("b");

    break;

    case 3:
        console.log("c");

    break;

    case 4:
        console.log("d");

    break;

     default:
    console.log("number not found");
}

var love = true;
while(love){
    for(var i = 0; i < 11; i++){
        console.log(i);
        
    }
    var love = false;
}

//COMPARISON
var num1 = 5;
var num2 = 6;
//TRUE STATEMENTS
if(num1 < num2){
    console.log(num1 + " is less than " + num2);
} 
if(num2 > num1){
    console.log(num2 + "i s greater than " + num1);

} 
if(num1 !== num2){
    console.log(num1 + " is not equal to " + num2);
}

if (num1 + num2 === 11){
    console.log(num1 + "+" + num2 + "=" + 11);
}

//FALSE STATEMENTS

if(num2 < num1){
    console.log(num1 + " is less than " + num2);
} else {
    console.log(num2 + " is not less than " + num1);
}

if (num1 + num2 === 10){
    console.log(num1 + "+" + num2 + "=" + 11);
} else{
    console.log(num1 + "+" + num2 + "!=" + 10);
}

if (num1 > num2){

}else {
    console.log(num1 + " is not greater than " + num2);
}
if (num1 + num2 !== 11){
    console.log();
} else{
    console.log(num1 + "+" + num2 + "=" + 11);
}

//IF ELSE STATEMENTS

var dog = false;
if(!(dog)){
    var dog = true;
    console.log(dog);
}