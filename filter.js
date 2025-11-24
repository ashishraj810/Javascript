// working of filter in js....

const arr = [23 , 34 , 45 , 67 , 56 , 2 , 3 , 8 , 45];

const newArray = arr.filter((num) => (num<30))       //this is a callback function
console.log(newArray);         

const newArray1 = arr.filter((num) => (num>30))      //this is a callback function
console.log(newArray1); 

// a customised filter function created on my own..this is not pre-defined.

arr.myFilter = function(compare) {       //this myFilter function will work only for this particular array 'arr'.If u
                                          //  wana generalise this function so that it works for an array then u need
                                          // to replace arr with Array.prototype.myFilter and then this function will
                                          // work for any array u want.
  const ans = [];
  for(let num of this){
    if(compare(num)) {
      ans.push(num);
    }
  }

  return ans;
}

const newArray2 = arr.myFilter((num) => num>28);

console.log(newArray2);