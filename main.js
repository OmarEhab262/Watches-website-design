let img = document.querySelector(".img");
function whaches(watch) {
  img.src = watch;
}
var link = document.querySelector(".menu-slide");
var icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  link.classList.toggle("show");
});
