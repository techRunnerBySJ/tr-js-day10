// Clone an object in JavaScript
const originalObject = { name: 'Tech Runner', age: 1 };
const clonedObject1 = Object.assign({}, originalObject);
const clonedObject2 = { ...originalObject };
console.log(clonedObject1); // { name: 'Tech Runner', age: 1 }
console.log(clonedObject2); // { name: 'Tech Runner', age: 1 }
