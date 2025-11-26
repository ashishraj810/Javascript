// Fragments--> It is used to create all the needed elements and then display them all at once in the UI

const arr = ["Toyota" , "TATA" , "Hyundai" , "BMW" , "Audi" , "Mercedes" , "Porsche" , "Bugati"];
const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let cars of arr){
  const list = document.createElement("li");
  list.textContent = cars;
  fragment.append(list);
}

unorderElement.append(fragment)

//Remove any element from UI.

const s1 = document.getElementById("me");
s1.remove();                           //removes 'hello world' from the UI