import './article.less'
import { data } from './articleData.js'

function articleMaker(item) {
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("article");

  const newHeading = document.createElement("h2");
  newHeading.textContent = item.title;
  articleDiv.appendChild(newHeading);

  const dateP = document.createElement("p");
  dateP.classList.add("date");
  dateP.textContent = item.date;
  articleDiv.appendChild(dateP);

  const para1 = document.createElement("p");
  para1.textContent = item.firstParagraph;
  articleDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = item.secondParagraph;
  articleDiv.appendChild(para2);

  const para3 = document.createElement("p");
  para3.textContent = item.thirdParagraph;
  articleDiv.appendChild(para3);

  const articleSpan = document.createElement("span");
  articleSpan.classList.add("expandButton");
  articleDiv.appendChild(articleSpan);

  const myButton = document.createElement("button");
  articleSpan.appendChild(myButton);

  articleSpan.addEventListener("click", (event) => {
    articleDiv.classList.toggle("article-open");
  });

  return articleDiv;
}

let articlesDiv = document.querySelector(".articles");

data.forEach(articleData => {
  const article = articleMaker(articleData);
  articlesDiv.appendChild(article);
});


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
  
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
