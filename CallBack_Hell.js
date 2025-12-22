function Payment(Callback){
  console.log("Payment is initialised.");

  setTimeout(()=>{
    console.log("Payment Successfull.Order Placed.");
    Callback();
  },3000);
}

function PrepareOrder(Callback){
  console.log("Order is being prepared.");

  setTimeout(()=>{
    console.log("Order is Ready.");
    Callback();
  },3000);
}

function PickOrder(Callback){
  console.log("Order to be picked.");

  setTimeout(()=>{
   console.log("Order on the way.To be delivered in 10 minutes.");
   Callback();
  },3000);
}

function OrderDeliver(){
  console.log("Order reached destination");

  setTimeout(()=>{
    console.log("Order Completed Successfully.")
  },2000);
}

Payment(()=>{
  PrepareOrder(()=>{
    PickOrder(()=>{
      OrderDeliver();   
    });
  });
});