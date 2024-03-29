function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const activeLinks = document.querySelectorAll(".titles a.active");
  const articleSelector = clickedElement.getAttribute("href");
  const targetArticle = document.querySelector(articleSelector);
  const articles = document.querySelectorAll(".post");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  clickedElement.classList.add("active");

  for (let article of articles) {
    article.classList.remove("active");
  }

  targetArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");
for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
