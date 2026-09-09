document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
  });
});
