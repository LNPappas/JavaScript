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


  