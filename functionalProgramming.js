/*
Functional programming is a style of programming where solutions are 
simple, isolated functions, without any side effects outside of 
the function scope.
INPUT -> PROCESS -> OUTPUT
Functional programming is about:
1) Isolated functions - there is no dependence on the state of the program, 
which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, 
to the state of the program outside the function are carefully controlled
*/
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getGreenTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getGreenTea(40);
console.log(tea4TeamFCC.length);
console.log(tea4TeamFCC);

//Understand Functional Programming Terminology
/*
Callbacks are the functions that are slipped or passed into 
another function to decide the invocation of that function.
 You may have seen them passed to other methods, for example 
 in filter, the callback function tells JavaScript the criteria 
 for how to filter an array.

 first class functions: can be assigned variables, passed into
 another function, returned from another function. All functions
 are first class in JavaScript

higher order functions: take a function as an argument or return
funtions as a values.

lambda: higher order functions
*/


// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//  Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
  
    var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.slice(index+1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    return this;
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);
console.log();
// Avoid Mutations and Side Effects Using Functional Programming
// Fill in the code for the function incrementer so it returns 
// the value of the global variable fixedValue increased by one.
  // The global variable
var fixedValue = 4;

function incrementer1 () {
return fixedValue+1
}
var newValue = incrementer1(); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4

// Pass Arguments to Avoid External Dependence in a Function
// The global variable
var fixedValue = 4;
function incrementer (v) {
  return v+1;
}
var newValue = incrementer(fixedValue); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4

//Refactor Global Variables Out of Functions
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (l, bookName) {
  let list = [...l]
  list.push(bookName);
  return list;
}
function remove (l, bookName) {
  let list = [...l]
  var book_index = list.indexOf(bookName);
  if (book_index >= 0) {

    list.splice(book_index, 1);
    return list;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);

// Use the map Method to Extract Data from an Array
// The global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
const ratings = watchList.map(rat => ({title: rat.Title, rating: rat.imdbRating}));
console.log(ratings);
const rate = watchList.map(({Title: title, imdbRating: rating}) => ({title, rating}));
console.log(rate);

// Implement map on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(a => newArray.push(callback(a)));
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);

// Use the filter Method to Extract Data from an Array
// with the map funtion.
const filteredList1 = watchList.map(m => { return ({title: m.Title, rating: m.imdbRating})}).filter(m => { return parseFloat(m.rating) >= 8.0});
console.log(filteredList1);
const filteredList2 = watchList.map(function(e) {return {title: e.Title, rating: e.imdbRating};}).filter(e=> e.rating >= 8);
console.log(filteredList2);

//Implement the filter Method on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  this.forEach((a) => {if(callback(a) == true){newArray.push(a);}});
  return newArray;
};

var new_s2 = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s2);

// Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  var s = sliceArray(inputAnim, 1, 3);
  console.log(s)


  // remove elements using slice, not splice
  function nonMutatingSplice(cities) {
    return cities.slice(0,3);
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  let nonM = nonMutatingSplice(inputCities);
  console.log(nonM);

  // Combine Two Arrays Using the concat Method
  function nonMutatingConcat(original, attach) {
    return original.concat(attach);
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  let no = nonMutatingConcat(first, second);
  console.log(no);

  //Add Elements to the End of an Array Using concat Instead of push
  function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  let c = nonMutatingPush(first, second);
  console.log(c);
 
  // Use the reduce Method to Analyze Data
  // reduce(accumulator (return value),current element, index of current, array)
  function getRating(watchList){
    let total = 0;
    var averageRating = watchList.reduce((sum, movie) => {
     if (movie.Director == 'Christopher Nolan'){
       total +=1;
       return sum +=parseFloat(movie.imdbRating);
     } 
     return sum
    },0)/total;
  
    return averageRating;
  }
  console.log(getRating(watchList));

  // Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
  // returns a new array containing only the square of only the 
  // positive integers (decimal numbers are not integers) 
  // when an array of real numbers is passed to it.
  const squareList = (arr) => {
    let a = arr.filter((a) => {if (a>=0 && Number.isInteger(a)) return a}).map(a => Math.pow(a,2));
    return a;
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

  // Sort an Array Alphabetically using the sort Method

  function alphabeticalOrder(arr) {
    return arr.sort()
  }
  let alph = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  
  console.log(alph);

  // Return a Sorted Array Without Changing the Original Array
  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let a = [...arr];
  return a.sort()
}
let nonMu = nonMutatingSort(globalArray);
console.log(nonMu);

// Split a String into an Array Using the split Method
function splitify(str) {
    return str.split(/\W/)
  }
  let spliti = splitify("Hello World,I-am code");
  console.log(spliti);

  // Combine an Array into a String Using the join Method
  function sentensify(str) {
    let arr = str.split(/\W/);
    return arr.join(' ')
  }
  let sen = sentensify("May-the-force-be-with-you");
  console.log(sen);

  // Apply Functional Programming to Convert Strings to URL Slugs
  // The global variable
var globalTitle = " Winter Is  Coming";

function urlSlug(title) {
    return title.toLowerCase().split(/\W/).filter((o) => {return o !== '';}).join('-')
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);

// every method (if every element is)
function checkPositive(arr) {
    return arr.every(c => c > 0);
  }
  let cP = checkPositive([1, 2, 3, -4, 5]);
  console.log(cP);

  
// some Method (if some element is)
function checkPositive2(arr) {
    return arr.some(c => c > 0)
  }
  let cPo = checkPositive2([1, 2, 3, -4, 5]);
  console.log(cPo);
