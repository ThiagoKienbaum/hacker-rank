let counter = 0;
const buttonDiv = document.querySelector("#button");
buttonDiv.innerHTML = `<button type="button" id="btn" onClick="increment()" >${counter}</button>`
const button = document.querySelector("#btn");

const increment = () => button.innerText = counter++;

