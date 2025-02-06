document.getElementById("shopping-cart-icon").addEventListener("click", openMiniCart, false);

function openMiniCart() {
    const minicart = document.querySelector(".overlay");
    minicart.setAttribute("style", "display: flex");
}