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

//