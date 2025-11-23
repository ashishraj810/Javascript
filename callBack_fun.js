// to implement useCallback() function

// function_1
// function ashish(){
//   console.log("hii,who's there");
// }

// // function_2
// function raj(callback){
//   console.log("i'm home");
//   callback();
// }

// ashish(raj);

function zomatoOrderPlaced() {
  console.log("we have started preparing ur food");
}

function blinkitOrderPlaced() {
  console.log("we have started packing ur food");
}

function payment(amount , callback) {
  console.log(`${amount} payment is initialized`)
  console.log("payment is received");
  callback();
}

// payment(1213 , blinkitOrderPlaced);
payment(1213 , zomatoOrderPlaced);