function storeNames() { return arguments; }
var sN = storeNames('Mulder', 'Scully', 'Alex Kryceck');
console.log(sN);

var args = Array.prototype.slice.call(sN);
var argsEs6 = Array.from(sN);
console.log(args);
console.log(argsEs6);

function getGrades1(){
    // arguments from index 1 up to not including 3
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}
console.log(getGrades1(90,100,75,40,89,95));

function getGrades2(){
    // arguments from index 1 on
    var args = Array.prototype.slice.call(arguments,1);
    return args;
}
console.log(getGrades2(90,100,75,40,89,95));

function getGrades3(){
    // all arguments
    var args = Array.prototype.slice.call(arguments);
    return args;
}
console.log(getGrades3(90,100,75,40,89,95));

var a = [];
for (var i=0; i<sN.length; i++){
    a.push(sN[i])
}
console.log(a)

// ES6 arrow functions:
function getIntoAnArgument(...args){
    args.forEach(arg => console.log(arg))
}
getIntoAnArgument(sN) // Object
getIntoAnArgument(a) // Array
getIntoAnArgument(90,'apple',100,'75',40,89,95) // Multiple inputs

// Postfix 
var x = 3; // declare a variable 
y = x++; // y = 4, x = 3 
console.log('x++',x, y) // x = 4, y=3
// Prefix 
var a = 2; 
b = ++a; // a = 3, b = 3
console.log('++a',a, b)

// Postfix 
var x1 = 3; // declare a variable 
y1 = x--; // y = 3, x = 3 
console.log('x--',x1, y1) //x=3, y=4

// Prefix 
var a1 = 2; 
b1 = --a1; // a = 1, b = 1
console.log('--a1',a1, b1)

// ES5 syntax
var multiply = function(x, y) {
    return x * y;
  };
  
  // ES6 arrow function
  var multiply = (x, y) => { return x * y; };
  
  // Or even simpler
  var multiply = (x, y) => x * y;    