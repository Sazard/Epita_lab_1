//test
var numbers; 
numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers[6].toString() + numbers[6].toString() + numbers[6].toString());

var alphabet = ['a','b','c','d','e','f'];

function printAlphabet(display){
    display.forEach(element => { console.log(element)});
}

printAlphabet(alphabet);

//exercices

function myAlphabetLength(array){
    console.log("The size of the array is : " +array.length);
}

myAlphabetLength(alphabet);


var Planets = ['earth','march','venus','sun','pluton'];

console.log(Planets[0]);
console.log(Planets[1]);
console.log(Planets[2]);
console.log(Planets[3]);
console.log(Planets[4]);


var wowDatatypes = [1,'a',null];

wowDatatypes.forEach(element => { console.log(element)});
console.log( 5 === "5");

var color = function(){
    return "red";
}
var colorOne = color;
console.log(colorOne);

var hello = function(){
    return "Hello World!"
}
console.log(hello);