function sumAll(arr) {
    let start = Math.min(arr);
    let end = Math.max(arr);
    let total = 0;
    while (start <= end){
      total += start
      start+=1;
    }
    return total;
  }
  
  let sA = sumAll([4,4]);
  console.log(sA);
  let sA1 = sumAll([1,4]);
  console.log(sA1);
  let sA2 = sumAll([4,1]);
  console.log(sA2);

  function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => 
      !arr1.includes(item) || !arr2.includes(item));
  }
  
  let dA1 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  console.log(dA1);
  
  let dA2 = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  console.log(dA2);

  function destroyer() {
    let arr = Array.prototype.slice.call(arguments);
    let a = arr.shift()
    return a.filter(item => !arr.includes(item))
  }
  
  let dest = destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1,1]
  console.log(dest);
  let dest1 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //should return [1, 5, 1]
  console.log(dest1);
  let dest2 = destroyer([3, 5, 1, 2, 2], 2, 3, 5); //should return [1]
  console.log(dest2);
  let dest3 = destroyer(["tree", "hamburger", 53], "tree", 53); //should return ["hamburger"]
  console.log(dest3);
  let dest4 = destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"); // should return [12,92,65]
  console.log(dest4);

  function whatIsInAName(collection, source) {
    var sK = Object.keys(source);
    // filter collections
    return collection.filter(obj => {
      return sK 
      // map obj has property & the objects key value is equivalent to the source key value
      .map( k => {
        return obj.hasOwnProperty(k) 
          && obj[k]=== source[k];})
      // reduce to elements with only both a && b 
      .reduce((a,b) => { 
        return a && b;
       });
    });
  }
  
  let w1 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
  let w2 = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
  let w3 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
  let w4 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
  let w5 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
  let w6 = whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) //should return []
  console.log(w1, w2, w3, w4, w5, w6);

  function spinalCase(str) {
    //split string on space, underscore, or capitol letter (regex)
    return str.split(/\s+|_+|(?=[A-Z])/)
    //join split with dash
    .join('-')
    //convert to lowercase
    .toLowerCase();
  }
  
  let sC1 = spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
  console.log(sC1);
  let sC2 = spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
  console.log(sC2);
  let sC3 = spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
  console.log(sC3);
  let sC4 = spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
  console.log(sC4);
  let sC5 = spinalCase("AllThe-small Things") //should return "all-the-small-things".
  console.log(sC5);

  function translatePigLatin(str) {
    //  starts with vowel
    if(str.match(/^[aeiou]/)){
      return str + 'way';
    } 
    // get up to first vowel
    let c = str.match(/^[^aeiou]+/)[0];
    // return substring first vowel to end, plus string before first vowel, + 'ay'
    return str.substring(c.length) + c +'ay';
  }
  
  let tPL1 = translatePigLatin("california") //should return "aliforniacay".
  console.log(tPL1);
  let tPL2 = translatePigLatin("paragraphs") //should return "aragraphspay".
  console.log(tPL2);
  let tPL3 = translatePigLatin("glove") //should return "oveglay".
  console.log(tPL3);
  let tPL4 = translatePigLatin("algorithm") //should return "algorithmway".
  console.log(tPL4);
  let tPL5 = translatePigLatin("eight") //should return "eightway".
  console.log(tPL5);
  //Should handle words where the first vowel comes in the middle of the word. 
  let tPL6 = translatePigLatin("schwartz") //should return "artzschway".
  console.log(tPL6);
  //Should handle words without vowels. 
  let tPL7 = translatePigLatin("rhythm") //should return "rhythmay".
  console.log(tPL7);

  function myReplace(str, before, after) {
    // get the index of the original word (before)
    let i = str.indexOf(before);
    // if the original word starts with upper case make sure the new word also starts with uppercase
    if (str[i] === str[i].toUpperCase()){
        // convert first letter to uppercase and add remainder of word/string
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    // use replace to replace before word with after word
    return str.replace(before, after);
  }
  
  let mR = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  console.log(mR)
  let mR1 = myReplace("Let us go to the store", "store", "mall") //should return "Let us go to the mall".
  console.log(mR1)
  let mR2 = myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return "He is Sitting on the couch".
  console.log(mR2)
  let mR3 = myReplace("This has a spellngi error", "spellngi", "spelling") //should return "This has a spelling error".
  console.log(mR3)
  let mR4 = myReplace("His name is Tom", "Tom", "john") //should return "His name is John".
  console.log(mR4)
  let mR5 = myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return "Let us get back to more Algorithms".
  console.log(mR5)

  function pairElement(str) {
    let s = str.split('');
    let result = []
    var i;
    for (i in s){
      switch (s[i]){
        case 'T':
          result.push(['T','A'])
          break
        case 'A':
          result.push(['A','T'])
          break
        case 'C':
          result.push(['C','G'])
          break
        case 'G':
          result.push(['G','C'])
          break
      }
    }
    return result;
  }
  
  let pE = pairElement("GCG");
  console.log(pE);
  
  let pE1 = pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
  let pE2 = pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
  let pE3 = pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
  console.log(pE1);
  console.log(pE2);
  console.log(pE3);