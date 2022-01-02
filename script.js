document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    if (document.getElementById("icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("icon").setAttribute("src", "images/icon-close.svg");
    } else {
        document.getElementById("icon").setAttribute("src", "images/icon-hamburger.svg");
    }
});