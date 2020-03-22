// Inherit behaviors from Supertype:
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

beagle.eat(); // prints "nom nom nom"
console.log(duck instanceof Animal); // => true

// Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let terrier = new Dog();
terrier.eat();
console.log(Dog.prototype instanceof Animal);

// Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let pigeon = new Bird();
let lab = new Dog();

console.log(pigeon.constructor);
console.log(lab.constructor);

// Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => { console.log("Woof!") };

let hound = new Dog();
hound.bark();
hound.eat();

// Override Inherited Methods
function Bird() { }

Bird.prototype.fly = () => { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = () => { return 'Alas, this is a flightless bird.' };

let penguin = new Penguin();
console.log(penguin.fly());

// Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = (obj) => { obj.glide = () => { console.log("Gliding, wooosh!");}};
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();
  boat.glide();

  // Use Closure to Protect Properties Within an Object from Being Modified Externally
  function Bird() {
    let weight = 15;
    this.getWeight = () => {return weight};
  }
  
  let ducky = new Bird();
  console.log(ducky.getWeight());

  //Understand the Immediately Invoked Function Expression (IIFE)
  (function () {
    console.log("A cozy nest is ready");
  })();

  //Use an IIFE to Create a Module
  let funMixin = (() => { 
    return { 
      isCuteMixin: (obj) => {
        obj.isCute = () => {
          return true;
        };
      },
      singMixin: (obj) => {
        obj.sing = () => {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();

  funMixin.singMixin(ducky);
  funMixin.isCuteMixin(ducky);
  ducky.sing();
  console.log(ducky.isCute());