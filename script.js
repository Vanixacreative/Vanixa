document.addEventListener("DOMContentLoaded", function () {

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  if (menu && nav) {
    menu.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav) {
        nav.classList.remove("open");
      }
    });
  });

});
