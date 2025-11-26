const newElement = document.createElement("h3");
newElement.textContent = "i m not a robot";
newElement.id = "my";

//select the element

const element = document.getElementById("me");
element.after(newElement);

//new element creation

const newElement2 = document.createElement('h2');
newElement2.textContent = "Its me";

const next = document.getElementById("my");
my.after(newElement2);

//creating new lists in js

// const list1 = document.createElement("li");
// list1.textContent = "UPSC"
// const list2 = document.createElement("li");
// list2.textContent = "CAT"
// const list3 = document.createElement("li");
// list3.textContent = "GATE"
// const list4 = document.createElement("li");
// list4.textContent = "MAT"

// const unorderList = document.getElementById("listing")
// unorderList.append(list4);
// unorderList.append(list1);
// unorderList.append(list2);
// unorderList.prepend(list3);

//best approach to display my data from array to UI in list.

const arr = ["milk" , "ghee" , "rice" , "tea" , "rice"];

const unorderElement = document.getElementById("listing");

for(let food of arr){
  const list = document.createElement("li");
  list.textContent = food;
  unorderElement.append(list);

}
