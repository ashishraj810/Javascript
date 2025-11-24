const names = ["Alice" , "Rohit" , "Bob" , "Mohit" , "Zip"];

// names.sort();             //sorts the array.
names.reverse();             //reverses array.
console.log(names);

const arr2 = [23 , 45 , 12 , 3 , 10 , 1];

arr2.sort((a , b) => a-b);     //-ve: pahle a aayega fr b ayega.
                               //+ve:  pahle b aayega fr a ayega
console.log(arr2);