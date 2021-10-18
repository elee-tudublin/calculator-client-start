
// import everything from fetchAPI.js
// This will allow resources to be referenced as api.BASE_URL, etc.
import * as api from './fetchAPIHelper.js';

// Call this function when Add button is clicked
async function calcAdd() {
  let numA = 0;
  let numB = 0;

  // use getElementById() to get values
  // To do: proper validation
  numA = Number(document.getElementById('inputA').value);
  numB = Number(document.getElementById('inputB').value);

  // call api to perform addition
  const add = await api.getDataAsync(`${api.BASE_URL}/add?a=${numA}&b=${numB}`);
  // display answer on page
  let answerText = `${add.a} + ${add.b} = ${add.answer}`;

  // Log to console (useful for debugging)
  console.log(answerText);

  // display answer
  document.getElementById('answer').innerText = answerText;
  return true;
}

// Implement the other calculator functions

function loadCalculator() {
// Add event listners to the buttons
document.getElementById('btnAdd').addEventListener('click', calcAdd);
}

export {
  loadCalculator,
  calcAdd
}

// load the script
loadCalculator();