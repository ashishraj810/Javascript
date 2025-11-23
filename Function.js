// how to declare a function in js

function ashish(){
  console.log(`hii everybody , i'm a function` )
}

ashish();

//Rest Opertator

function addNumber(...num){
   let sum = 0;

   for(let n of num){
    sum+=n;
   }

   console.log(sum);
}
addNumber(2,9);
addNumber(4,6,8,3);
addNumber(4,6,8);