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
  console.log();
  function fearNotLetter(str) {
    var prev = str.charCodeAt(0);
    for (var i = 1; i < str.length; i++){
      if (str.charCodeAt(i) != prev+1){
        return String.fromCharCode(prev+1);
      } else {
        prev = str.charCodeAt(i);
      }
    }
    return undefined
  }
  
  let fNL = fearNotLetter("abce");
  console.log(fNL);
  
  let fNL1 = fearNotLetter("abcdefghjklmno") //should return "i".
  let fNL2 = fearNotLetter("stvwx") //should return "u".
  let fNL3 = fearNotLetter("bcdf") //should return "e".
  let fNL4 = fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.
  console.log(fNL1);
  console.log(fNL2);
  console.log(fNL3);
  console.log(fNL4);

  // get all arrays seperatly, not as multi dimentional array
function uniteUnique(...arr) {
    // join all arrays into a single array
    let a = [].concat(...arr);
    //return a set of the original array as an array
    // Set is an object to create new Set()
    // use ... for unknown # of arguments
    return [...new Set(a)];
  }
  
  let uU1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
  let uU2 = uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
  let uU3 = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].
  console.log();
  console.log(uU1);
  console.log(uU2);
  console.log(uU3);

  function convertHTML(str) {
    var i;
    let arr = str.split('');
    for (i in arr){
      switch (arr[i]){
        case '<':
          arr[i] = '&lt;'
          break;
        case '>':
          arr[i] = '&gt;'
          break;
        case '&':
          arr[i] = '&amp;'
          break;
        case '\'':
          arr[i] = '&apos;'
          break;
        case '\"':
          arr[i] = '&quot;'
          break;
      }
    }
    return arr.join('');
  }
  
  let cH1 = convertHTML("Dolce & Gabbana") //should return Dolce &amp; Gabbana.
  let cH2 =convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &lt; Pizza &lt; Tacos.
  let cH3 =convertHTML("Sixty > twelve") //should return Sixty &gt; twelve.
  let cH4 =convertHTML('Stuff in "quotation marks"') //should return Stuff in &quot;quotation marks&quot;.
  let cH5 =convertHTML("Schindler's List") //should return Schindler&apos;s List.
  let cH6 =convertHTML("<>") //should return &lt;&gt;.
  let cH7 =convertHTML("abc") //should return abc.
  console.log()
  console.log(cH1)
  console.log(cH2)
  console.log(cH3)
  console.log(cH4)
  console.log(cH5)
  console.log(cH6)
  console.log(cH7)

  function sumFibs(num) {
    let a=1,b=0,temp=a,sum=0;
    while (a <= num){
      temp = a;
      a = b;
      b = b+temp; 
      if (a%2!==0 && a<=num){
        sum +=a
      }
    }
    return sum
  }
  
  let sF2 =sumFibs(1) //should return a number.
  let sF3 =sumFibs(1000) //should return 1785.
  let sF4 =sumFibs(4000000) //should return 4613732.
  let sF5 =sumFibs(4) //should return 5.
  let sF6 =sumFibs(75024) //should return 60696.
  let sF7 =sumFibs(75025) //should return 135721.
  console.log()
  console.log(sF2)
  console.log(sF3)
  console.log(sF4)
  console.log(sF5)
  console.log(sF6)
  console.log(sF7)

  function sumPrimes(num) {
    var res = 0;
  
    function getPrimes(max) {
      var sieve = [],i,j;
      var primes = [];
      for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;
          }
        }
      }
      return primes;
    }
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
    return res;
  }
  console.log();
  let sP = sumPrimes(10); // should return 17
  console.log(sP);
  let sP2 = sumPrimes(977); // should return 73156.
  console.log(sP2);

  console.log();
  function smallestCommons(arr) {
    let a = arr.sort((a,b)=>{return a-b})
    let all = []
    for (var i = a[0]; i<a[1]; i++){
      all.push(i);
    }
    let num = a[1];
    let div = false;
    var j = 0;
    while (j<all.length){
      if (num%all[j] == 0){
        j++
      } else {
        j = 0;
        num = num+a[1]
      }
    }
    return num;
  }
  
  
  let sCn = smallestCommons([1,5]) // should return 60;
  console.log(sCn)
  let sCn1 = smallestCommons([5, 1]) // should return 60.
  let sCn2 = smallestCommons([2, 10]) // should return 2520.
  let sCn3 = smallestCommons([1, 13]) // should return 360360.
  let sCn4 = smallestCommons([23, 18]) // should return 6056820.
  console.log(sCn1)
  console.log(sCn2)
  console.log(sCn3)
  console.log(sCn4)
  console.log();

  function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  let dE = dropElements([1, 2, 3], function(n) {return n < 3; }); // should return [ 1, 2, 3]
  console.log(dE)
  let dE1 = dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // should return [3, 4].
  let dE2 = dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // should return [1, 0, 1].
  let dE3 = dropElements([1, 2, 3], function(n) {return n > 0;}) // should return [1, 2, 3].
  let dE4 = dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // should return [].
  let dE5 = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // should return [7, 4].
  
  console.log(dE1)
  console.log(dE2)
  console.log(dE3)
  console.log(dE4)
  console.log(dE5)
  console.log();

  function steamrollArray(arr, f=[]) {
    arr.forEach(i=> {if (Array.isArray(i)) steamrollArray(i, f); else f.push(i);});
    return f;
  }
  
  
  
  let srA = steamrollArray([1, [2], [3, [[4]]]]);
  console.log(srA);
  let srA1 = steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
  let srA2 = steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
  let srA3 = steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
  let srA4 = steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
  console.log(srA1);
  console.log(srA2);
  console.log(srA3);
  console.log(srA4);
  console.log();

  function binaryAgent(str) {
    let a = [];
    let arr = str.split(' ').forEach(i => {a.push(String.fromCharCode(parseInt(i, 2)))});
    return a.join('');
  }
  
  let bA = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); //should return "Aren't bonfires fun!?"
  console.log(bA);
  
  let bA1 = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // should return "I love FreeCodeCamp!"
  console.log(bA1);
  console.log();

  function truthCheck(collection, pre) {
    let answer = true
    collection.forEach(i => {if(!i[pre]) answer = false})
    return answer
  }
  
  let tC = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // should return true.
  let tC0 = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") // should return false.
  let tC1 = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") //should return false.
  let tC2 = truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") //should return false
  let tC3 = truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") //should return true
  let tC4 = truthCheck([{"single": "yes"}], "single") //should return true
  let tC5 = truthCheck([{"single": ""}, {"single": "double"}], "single") //should return false
  let tC6 = truthCheck([{"single": "double"}, {"single": undefined}], "single") //should return false
  let tC7 = truthCheck([{"single": "double"}, {"single": NaN}], "single") //should return false
  console.log(tC);
  console.log(tC0);
  console.log(tC1);
  console.log(tC2);
  console.log(tC3);
  console.log(tC4);
  console.log(tC5);
  console.log(tC6);
  console.log(tC7);
  console.log();

  function addTogether(a, b) {
    if (typeof a !== "number"){
      return undefined
    } 
    let sum = b => 
    typeof b === "number" ? a + b : undefined;
    return typeof b === "undefined" ? b => sum(b) : sum(b);
  }
  
  
  let aT = addTogether(2,3); // should return 5
  console.log(aT)
  let aT1 = addTogether(2)(3) // should return 5.
  console.log(aT1)
  addTogether("http://bit.ly/IqT6zt") //should return undefined.
  let aT2 = addTogether(2, "3") // should return undefined.
  let aT3 = addTogether(2)([3]) // should return undefined.
  console.log(aT2)
  console.log(aT3)
  console.log()