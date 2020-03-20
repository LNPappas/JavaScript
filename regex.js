// check if 'base' in string with regular expressions
var string = 'all your base belong';
var string2 = 'all your belong';
var string3 = 'belong';
var regex = /base/;
var isExist = regex.test(string);
var isExist2 = regex.test(string2);
console.log(isExist);
console.log(isExist2);
console.log();

// ^ start of string must match re
// $ designates end of string must match

// start with string
console.log('^ and $:')
console.log(/^base/.test(string)); // false
console.log(/^all/.test(string)); // true
// end with string
console.log(/base$/.test(string)); // false
console.log(/belong$/.test(string)); //true
// start and end with string
console.log(/^belong$/.test(string)); //false
console.log(/^belong$/.test(string3)); //true
console.log();

console.log('character classes:');
// character classes
// [a-z] <= next char is letter a-z
// [A-Z] <= next char is Captital letter
// [a-zA-Z] <= next char is either capital or lowercase
// [0-9] <= next char is digit ...
// + <= next 1 or more char is ...
// * <= next 0 or more char is ... 
var s = 'my name is lauren'
console.log(/name is [a-z]/.test(s));
console.log(/name is [a-z]+/.test(s));
console.log(/name is [a-z]*/.test(s));
// check length {1,6} must be 1-4 characters
console.log('specify characters length: ')
console.log(/name is [a-z]{1,6}/.test(s));
console.log(/name is [a-z]{7,9}/.test(s));
console.log(/name is [a-z]{0,5}/.test(s));
console.log(/name is [a-z]{6}/.test(s));

var sC = 'my name is Lauren'
console.log('UpperCase: ')
console.log(/name is [a-z]/.test(sC));
console.log(/name is [a-zA-Z]/.test(sC));

// ? <= optional char
console.log('optional charater ?:')
console.log(/name is [a-z]?/.test(s));
console.log(/name is [a-z]/.test(sC));
console.log(/name is [a-z]?/.test(sC));

// Special character expressions
// \d <= [0-9]
// so \d+, \d*, \d{2}, etc...
// \w <= [a-zA-Z0-9] and _
// \s <= check for spaces
// \n <= new line
// \t <= tabs
var w = 'hello_world';
console.log(/\w/.test(w));
console.log(/\d/.test(w));

var space = 'I have a space and a numer: 10';
console.log();
console.log(/\s/.test(space));
console.log(/\d/.test(space));
console.log(/\w/.test(space));

// Grouping: store variables from strings
var v = /name is ([a-z]+)/.exec(s);
console.log(v);
console.log(v[0]);
console.log(v[1]);

var files = 'song.mp3 other_song.mp3 file.txt song.mp4 pic.img';

var reg = /(\w+\.mp3)/g;
var reg2 = /(\w+)\.mp3/g;
var f = reg.exec(files);
var f1 = reg2.exec(files);

while(f && f1){
    console.log(f[1]);
    f = reg.exec(files);

    console.log(f1[1]);
    f1 = reg2.exec(files);
}

//match passwords that are greater than 
//5 characters long, do not begin with numbers, 
//and have two consecutive digits.
let sampleWord = "banana12";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log(result)