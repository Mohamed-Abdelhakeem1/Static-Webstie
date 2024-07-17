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

// let topBtn = document.getElementById("topBtn");
// topBtn.addEventListener("click", () => {
//   document.documentElement.scrollTop = 0;
// });
