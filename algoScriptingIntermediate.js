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