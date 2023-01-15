"use strict";

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked (log it out)
//chnange the count-el in the HTML to reflect the new count

//EXAMPLE
// function increment() {
//   console.log("The button was clicked");
// }

//EXAMPLE
// //create a function, save() which logs out the count when it's called
// function save() {
//   console.log(count);
// }

let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

//Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

//create a variable that contains boths the count and the dash separator, i.e "12 - "
//Render the variable in the saveEl using innerText
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  //set the count to 0
  countEl.textContent = 0;
  count = 0;
}
