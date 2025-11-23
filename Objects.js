// how to create an object in js
//objects is created in key-value pair in js
//here we'll learn CRUD oprtn.

const user = {
  name : "Ashish",              //C:cretae object
  age : 20,
  email : "ashish@gmail.com",
  amount : 66
}

user.aadhar = 9876;              //create object
user.amount = 77;                //U:update object

console.log(user)                //R:read object

delete user.amount;              //D:delete object
console.log(user) ;               //R:read object
console.log(user.name) ;               //R:read object
console.log(user.age) ;               //R:read object

const {name , email} = user;          //destructuring of object.

console.log(name , email);

const arr = [12 , 23 , 34 , 45 , 56];
const [third , second] = arr;
const [ , ,  four] = arr;
console.log(third , second , four);

