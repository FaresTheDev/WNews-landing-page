const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const nav = document.querySelector("nav");
const descktopNav = document.getElementById("desktop-nav");
const main = document.querySelector("main");
const body = document.querySelector("body");
const headlineImage = document.getElementById("headline-image");
const dialog = document.querySelector("dialog");

openMenuButton.addEventListener("click", () => {
  //show menu
  dialog.showModal();
  
  //hide menu button
  closeMenuButton.addEventListener("click", () => {
    dialog.close();
  });
});

function toggledisplay() {
if (window.innerWidth >= 768) {
  body.classList.add("desktop-body");
    // show hide desktop nav
  descktopNav.classList.remove("hide-nav");
  headlineImage.src = "./images/image-web-3-desktop.jpg";
  // hide closeMenuButton 
  openMenuButton.style.display = "none";
} else {
  body.classList.remove("desktop-body");
    // hide hide desktop nav
  descktopNav.classList.add("hide-nav");
  headlineImage.src = "./images/image-web-3-mobile.jpg";
  openMenuButton.style.display = "block";
}};

//on load
toggledisplay();
//chechk if the window is resize
window.addEventListener("resize", toggledisplay);