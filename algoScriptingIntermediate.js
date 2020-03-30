function sumAll(arr) {
    let start, end;
    if (arr[0] < arr[1]){
      start = arr[0];
      end = arr[1];
    }
    else {
      start = arr[1];
      end = arr[0];
    }
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

  