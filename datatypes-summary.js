// Primitive Data Types

// String, Number, Boolean, Null, Undefined, Symbol,BigInt

// Non Primtive Data Types[Reference data types]

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id===anotherId);

// symbol is a built in function javascript used to unique identifiers its always return false answer

// BIGINT
const bigNumer = 123456789n;
// console.log(typeof bigNumer);

// console.log(bigNumer);


// Arrays, Object, Function

// javascript is dynamically language


const main = ["dhirendra", "lucky", "hari", "Man"]
let myObject= {
    name: "dhirendra",
    age: 21
}
// console.log(main);
// console.log(myObject);

// Function
const myFunction = function() {
    // console.log("hello world"); 
}

  //TYPES OF MEMORY LOCATION
  // STACK(primitive), AND HEAP(Non_Primtive)

  let myName = "Dhirendra"

  let anotherName = myName
  anotherName = "Bam"

  console.log(myName);
  
  console.log(anotherName);


  let userName = {
    email:"dhirendrabam12345@gmail.com",
    age:"21"
  }
  let userName2 = userName
  userName2.email = "dhirendra12@gmail.com"
  console.log(userName.email);
  console.log(userName2.email);
  
  

  

