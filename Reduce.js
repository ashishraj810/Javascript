// Reduce is used to calculate the summation of all the elements present in data set 

const arr = [23 , 34 , 45 , 46 , 56 , 67 , 78 , 788];

const totalPrice = arr.reduce((accumulator , currenValue) => {
  return accumulator + currenValue;
});

console.log(totalPrice);