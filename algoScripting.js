function titleCase(str) {
    let arr = str.split(' ');
    for (var x in arr){
      arr[x] = arr[x][0].toUpperCase() + arr[x].substr(1,arr[x].length-1).toLowerCase();
    }
    return arr.join(' ');
  }
  
  let t = titleCase("I'm a little tea pot"); // should return I'm A Little Tea Pot.
  console.log(t)

  let v = titleCase("sHoRt AnD sToUt") // should return Short And Stout.
  console.log(v)

  let u = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return Here Is My Handle Here Is My Spout
  console.log(u)


function frankenSplice(arr1, arr2, n) {
    arr2.splice(n,0,...arr1)
  return arr2;
}

let f = frankenSplice([1, 2, 3], [4, 5], 1); //should return [4, 1, 2, 3, 5]
let g = frankenSplice([1, 2], ["a", "b"], 1); //should return ["a", 1, 2, "b"]
let h = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(f)
console.log(g)
console.log(h)

function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  let b = bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9]
  console.log(b);
  let c = bouncer(["a", "b", "c"]); // should return ["a", "b", "c"]
  console.log(c);
  let d = bouncer([false, null, 0, NaN, undefined, ""]); //should return []
  console.log(d);
  let e = bouncer([null, NaN, 1, 2, undefined]); // should return [1, 2]
  console.log(e);
  
  function getIndexToIns(arr, num) {
    arr.sort(function(a, b){return a-b});
    let low = 0,x;
    for (x in arr) {
      if (arr[x] < num){
        low++
      } else {
        break;
      }
    }
    return low;
  }
  
  let g1 = getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3
  console.log(g1);
  let h1 = getIndexToIns([10, 20, 30, 40, 50], 30) //should return 2
  console.log(h1);
  let i1 = getIndexToIns([40, 60], 50); // should return 1
  console.log(i1);
  let j1 = getIndexToIns([3, 10, 5], 3); // should return 0
  console.log(j1);
  let k1 = getIndexToIns([], 1); //should return 0
  console.log(k1);
  let l1 = getIndexToIns([2, 5, 10], 15); // should return 3
  console.log(l1);
  let m1 = getIndexToIns([5, 3, 20, 3], 5) //should return 2
  console.log(m1);