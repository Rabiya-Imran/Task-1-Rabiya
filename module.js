const hamburgerBtn = document.getElementById("hamburgerBtn");
const navList = document.querySelector(".nav-links ul");

hamburgerBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
