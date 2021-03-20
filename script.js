import { quotes } from "./quotes.js";
let btn = document.querySelector("button");
btn = document.querySelector("button").addEventListener("click", () => {
  let p = document.querySelector("p");
  let randomQuote = Math.floor(Math.random() * quotes.length);
  function colorGenerator(transparency = 0.3) {
    let randomColor = () => Math.round(Math.random() * 255);
    return `rgb(${randomColor()},${randomColor()},${randomColor()}, ${transparency})`;
  }
  for (let i = 0; i < quotes.length; i++) {
    p.innerText = ` ${quotes[randomQuote].text},  "${quotes[randomQuote].author}"  `;
  }
  if (quotes[randomQuote].author === null) {
    p.innerText = ` ${quotes[randomQuote].text},  "${(quotes[
      randomQuote
    ].author = " the Author of this quote is unknow")}"  `;
  }
  let color = (document.querySelector(
    ".quote-par"
  ).style.backgroundColor = colorGenerator());
  //   console.log(color);
});
