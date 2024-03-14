// import { a, collMe as Coll } from "./app2.js";
// Coll();
// console.log(a);

//  import kech from "./app2.js";
//  kech()

// let title = document.getElementById("title");
// let number1 = +prompt("Birinchi sondi kiriting");
// let number2 = +prompt("Ikkinchi sondi kiriting");
// let amal = prompt("Amalni kiriting");

// switch (amal) {
//   case "+":
//     let sum = number1 + number2;
//     title.textContent = `${number1} + ${number2} =${sum} `;
//     break;
//   case "-":
//     let minus = number1 - number2;
//     title.textContent = `${number1} - ${number2} =${minus} `;
//     break;
//   case "*":
//     let kopayturuv = number1 * number2;
//     title.textContent = `${number1} * ${number2} =${kopayturuv} `;
//     break;
//   case "/":
//     let boluv = number1 / number2;
//     title.textContent = `${number1} / ${number2} =${boluv} `;
//     break;
//   default:
//     title.textContent = "Bunday amal yoq";
// }

let item = document.getElementsByClassName("item");
for (let i = 0; i < item.length; i++) {
  item[i].style.color = "red";
}

let li = document.querySelectorAll(".item");
li.forEach((item) => {
  let random = Math.trunc(Math.random() * 20);
  item.textContent = random;
  if (random % 2) {
    item.style.color = "red";
  } else {
    item.style.color = "green";
  }
});

let text = document.querySelector(".text");
text.innerHTML = `<b><i><a href = 'https://www.google.ru/?hl=ru'> Google</a></i></b>`;
let ulLI = document.querySelector("li");
console.log(ulLI.getAttribute("class"));

ulLI.setAttribute("href", "hammidullo");
ulLI.setAttribute("style", "color: yellow");

const content = document.querySelector(".content");
console.log(content.classList);
content.classList.remove("content");
content.classList.add("newContent");
content.classList.remove("newContent");
content.classList.add("content");

let poragraf = document.querySelectorAll("p");
poragraf.forEach((item) => {
  if (item.textContent.includes("error")) {
    item.classList.add("content");
  } else if (item.textContent.includes("success")) {
    item.classList.add("newContent");
  }
});
let h1 = document.querySelector("h1");
h1.classList.toggle("content");
h1.classList.toggle("content");
h1.classList.toggle("content");

h1.style.backgroundColor = "yellow";
h1.style.margin = "50px";
h1.style.display = "inline-block";
h1.style.fontSize = "48px";

import { arrArticle } from "./app2.js";

arrArticle.forEach((child) => {
  child.classList.add("article-child");
});
let title = document.querySelector("h2");
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);

let list = document.querySelector("ul");
// list.remove();

const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Yangi element";
  ul.appendChild(li);
  ul.prepend(li);
});
