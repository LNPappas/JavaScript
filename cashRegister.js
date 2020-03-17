function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var result = []; 
    var response = ''
    var val = [["ONE HUNDRED",100],["TWENTY",20],["TEN",10],["FIVE",5],["ONE",1],["QUARTER",.25],["DIME",.1], ["NICKEL",.05],["PENNY",.01]];
   var total = 0, i;
   for (i in cid){
     total += cid[i][1];
    total = Math.round(100*total)/100;
    }
    cid = cid.reverse();
    if(change == 0){
        response = 'CLOSED';
    } else if (change > total){
        response = 'INSUFFICIENT_FUNDS';
    } else{
        var x;
        for (x in val){
          var currentCid = cid[x][1];
          var currentVal = val[x][1];
            var y = 0;
            if (change >= currentVal && currentCid != 0){
              while (currentCid != 0 && change >= currentVal){
                y += currentVal
                change -= currentVal;
                change = Math.round(change*100)/100;
                currentCid -= currentVal;
                }
              y = Math.round(y*100)/100;
              result.push([val[x][0],y]);
              cid[x][1] = Math.round(currentCid*100)/100;
            }
          }
          if (change == 0){ response = 'OPEN'; } 
          else { 
            response = 'INSUFFICIENT_FUNDS';
            result = [];
          }
    }
    var zero = 0;
    for (x in cid){
      if (cid[x][1] == 0){
        zero +=1
      }
    }
    if (zero == 9){
      response = 'CLOSED'
      cid = cid.reverse();
      var z;
      for (z in cid){
        if (cid[z] != result[z][0]){
          result.push(cid[z]);
        }
      }
    }
  
    console.log('return:', {status: response, change: result})
    return {status: response, change: result}
  }

var a = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
var b = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
var c = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
var d = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
var e = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

console.log(a)
console.log()
console.log(b)
console.log()
console.log(c)
console.log()
console.log(d)
console.log()
console.log(e)