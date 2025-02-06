import "./header.js";

document.getElementById("close-mini-cart").addEventListener("click", closeMiniCart, false);
document.getElementById("minicart-confirm-btn").addEventListener("click", openCartPage, false);

function closeMiniCart() {
    const closeBtn = document.querySelector(".overlay");
    closeBtn.setAttribute("style", "display: none");
}

function openCartPage() {
    window.location.href = "cartPage.html";
}

