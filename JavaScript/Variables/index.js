//A variable is a container for storing data
//A variable behaves as if it was the value that it contains

/*Two steps to create a variable:
1. Declaration(var,let,const)
2. Assignment (=assignment operator)

*/

let firstName = "Bro";//strings
let age = 21; //number
let student = true; //boolean

console.log("Hello",firstName);
console.log("You are",age,"years old");
console.log("Enrolled: ",student);

//DOM Edit
document.getElementById("p1").innerHTML = "Hello"+ firstName;
document.getElementById("p2").innerHTML = "You are "+ age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: "+student;