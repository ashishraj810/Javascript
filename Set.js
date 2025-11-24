// Set returns only unique Values.No duplicate values are allowed under Set.

const arr = [23 , 34 , 34 , 56 , 23 , 10 , 67 , 10 , 78];

const s1 = new Set(arr);          //Set requires 'new' keyword

s1.add(57);

console.log(s1.has(56));
s1.delete(56);
s1.clear();
console.log(s1);
