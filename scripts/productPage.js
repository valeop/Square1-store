import "./header.js";

document.getElementById("close-mini-cart").addEventListener("click", closeMiniCart, false);

function closeMiniCart() {
    const closeBtn = document.querySelector(".overlay");
    closeBtn.setAttribute("style", "display: none");
}