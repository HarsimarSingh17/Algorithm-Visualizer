let moreButton = document.querySelector(".more-button");
let sideMenu = document.querySelector(".side-menu");
let closeButton = document.querySelector(".close-button");
let menuOverlay = document.querySelector(".menu-overlay");

moreButton.addEventListener("click", ()=>{
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
});
closeButton.addEventListener("click", ()=>{
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});
menuOverlay.addEventListener("click", ()=>{
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});
