//Method Chaining = calling one method after another in one continuous line of code

let userName = "som";

//elaborate method
//let letter = userName.charAt(0);
//letter = letter.toUpperCase();

//method chaining:

let letter = userName.charAt(1).toUpperCase().trim();

console.log(letter);

