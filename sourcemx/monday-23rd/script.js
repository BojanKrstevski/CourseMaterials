document.getElementById("name");
document.getElementsByTagName("p");
document.getElementsByClassName("klasa");
document.querySelector("div.primary > p#user");
document.querySelectorAll("name"); // cant find indexes with All since there can be only one

element.style.cssAttribute = "css-value";

// preferd methods to use to read and write attributes
element.setAttribute("type", "text");
element.getAttribute("attribute");

let className = "test";
element.innerHTML = `<div class="${className}">
html as string
</div>`;

element.innerHTML += "<p id='pfs'> Extra text added </p>";

// Manipulating Nodes

let paragraph = document.createElement("p");
let textNode = document.createTextNode("Hi from methods");
paragraph.appendChild(textNode);
element.appendChild(paragraph);

parentNode.removeChild();
parentNode.firstChild;
parentNode.lastChild;
childNode.remove();
childNode.parentNode;

function addText(location, myText) {
  let newNode;
  let newText;
  let parentElement;
  newNode = document.createElement("p");
  newText = document.createTextNode(myText);
  newNode.appendChild(newText);
  parentElement = document.getElementById(location);
  parentElement.appendChild(newNode);
}
addText("text-exercise", "Hi from function");

function removeText(location) {
  let parentEl;
  parentEl = document.getElementById(location);
  parentEl.removeChild(parentEl.lastChild);
}

removeText("text-exercise");
