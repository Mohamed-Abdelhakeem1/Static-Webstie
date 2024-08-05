let menu = document.getElementById("menu");
let btn = document.getElementById("dropBtn");
let land = document.getElementsByTagName("section");

btn.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});

Array.from(land).forEach((section) => {
  section.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

let offsetHeight = document.documentElement.offsetHeight;
let clientH = document.documentElement.clientHeight;
let progressSpan = document.getElementById("scroll");
let toTopBtn = document.getElementById("topBtn");
toTopBtn.style.right = "-50px";

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let progressValue = Math.round((scrollTop * 100) / (offsetHeight - clientH));
  progressSpan.style.width = progressValue + "%";
  if (scrollTop >= 1000) {
    toTopBtn.style.right = "20px";
  } else {
    toTopBtn.style.right = "-50px";
  }
});

let skillsSec = document.getElementById("skills");
