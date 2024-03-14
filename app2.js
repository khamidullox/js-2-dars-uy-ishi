let a = 12;
function collMe() {
  console.log("Sallom");
}
export { a, collMe };
export default function kech() {
  console.log("Hayrli kech");
}

export { arrArticle };
let article = document.querySelector("article");
let arrArticle = Array.from(article.children);
