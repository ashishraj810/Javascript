// forEachLoop working

const arr = [2 , 5 , 8 , 6 , 34 , 56 , 78];

arr.forEach((number , index) => {              //this is a callback function.
  console.log(number , index);
})

const arr2 = [2 , 4 , 9 , 5 , 6 , 3];
let sum = 0;

arr2.forEach((number) => {           //this is a callback function
  sum+=number;
})

console.log(sum);