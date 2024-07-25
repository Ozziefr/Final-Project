function openNav() {
  document.querySelector(".toggle").style.visibility = "hidden";
  document.querySelector("aside").style.display = "flex";
}
function closeNav() {
  document.querySelector("aside").style.display = "none";
  document.querySelector(".toggle").style.visibility = "visible";
}
