var myName = "Jordan";
var myButton = document.querySelector("button");
//adds event listener using JavaScript
myButton.addEventListener("click", dataPrompt);

function dataPrompt() {
    //using concatenation
    //alert("My name is " + name);
    //using string literals
    alert(`My name is ${myName}`);
    var yourName = prompt("Please enter your name.", "Enter name here:");
    //using concatenation
    //alert("Your name is " + name);
    //using string literals
    alert(`Your name is ${yourName}`);

    var yourLastName = prompt("Please tell me your last name.", "Enter last name here.");
    alert(`Nice to meet you ${yourName} ${yourLastName}.`);
    var firstNumber = prompt("Enter the first number", "First Number");
    var secondNumber = prompt("Enter the second number", "Second Number");
    var result = Number(firstNumber) + Number(secondNumber);
    alert(`The result is ${result}.`);
    console.log(`Your name is ${yourName}`);
    console.log(`Nice to meet you ${yourName} ${yourLastName}.`);
    console.log(`The result is ${result}.`);
    console.log(`Your name is ${yourName}.\nNice to meet you ${yourName} ${yourLastName}.\nThe result is ${result}.`);
    var body = document.querySelector("body");
    var p = document.createElement('p');
    p.innerText = `Your name is ${yourName}.\nNice to meet you ${yourName} ${yourLastName}.\nThe result is ${result}.`;
    body.appendChild(p);
}