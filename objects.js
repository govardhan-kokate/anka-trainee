//object task  
let person ={
    'first name':'Max',
    age: 30,
    hobbies: ['Sports','Cooking'],
    greet: function() {
        alert('Hi there!');
    },
    1.5: 'hello'
};
 //delete is use 
 //in object 
delete person.age;
person.isAdmin = true;

console.log(person['first name']);
console.log(person[1.5]); 


