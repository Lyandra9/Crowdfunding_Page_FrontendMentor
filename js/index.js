const checkbox = document.querySelector("#header-menu-checkbox");
const menu_mobile = document.querySelector(".menu-items-container");
const overlay = document.querySelector(".overlay");
function showMenu() {
  if (checkbox.checked) {
    menu_mobile.classList.add("show");
    overlay.style.backgroundImage =
      "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.position = "fixed";
  } else {
    if (menu_mobile.classList.contains("show")) {
      menu_mobile.classList.remove("show");
      overlay.style.backgroundImage = "none";
    }
  }
}
