const menuBtn = document.getElementById("menu-icon");
const navbarEle = document.getElementById("navbar-id");

menuBtn.addEventListener("click", () => {
    navbarEle.classList.toggle("active");
});

window.onscroll = () => {
    navbarEle.classList.remove("active");
}