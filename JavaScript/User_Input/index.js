/*How to accpt user input

We can do that by two ways:
With a window prompt
Using HTML textbox
*/
//Easy way- using windows prompt:

//let username = window.prompt("Enter your name:");
//console.log(username);

//Difficult way by using HTML textbox

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}