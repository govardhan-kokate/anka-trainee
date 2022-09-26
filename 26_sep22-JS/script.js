
//----------Normal function ---------------

// function printMyName(name){
//     console.log(name);
//   }
//   printMyName("rutuja");

  //--------------Arrow function-------------
  // const printMyName = (name)=>{
  //   console.log(name);
  // }
  // printMyName('Rutuja');

  //--------------------------------
  const printName=(name,age)=>{
    console.log(name,age);
  }
  printName('sakshi',11);

  //-----------------------------
  const multiply =(number)=>{
    return number*2;
  }
  console.log(multiply(2));


  //------- Classes---------------------------
  class Human{
   constructor(){
    this.gender='male';
   }
   printGender(){
    console.log(this.gender);
   }
  }

  class Person extends Human{
    constructor(){
      super();
      this.name='Max';
      this.gender='Male';
    }
    printMyName(){
      console.log(this.name);
    }
  }

  const person = new Person();
  person.printMyName();
  person.printGender();

//----------Spread operators----------------------------

const numbers=[1,2,3];
const newNumbers=[...numbers,4];
console.log(newNumbers);


const personn={
  name:'Rutuja'
};

const newPerson={...personn,age:28};
console.log(newPerson);

//----------Rest operator-------------------
const filter = (...args)=>{
  return args.filter(el =>el === 1);
}
console.log(filter(1,2,3));

//--------------Destructuring-------------------------

[a,b]=['Hello','people']
console.log(a);
console.log(b);

const numArray=[11,22,33];
[num1, ,num2] = numArray;
console.log(num1,num2);


const obj={myname:'Ritu',myage:12};
const {myname,myage}=obj;
console.log(myname);
console.log(myage);


































