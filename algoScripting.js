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


  