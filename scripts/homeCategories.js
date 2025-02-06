const productsCategories = document.querySelectorAll(".filter-btn");
let selectedCategory = "all";

const cleanSelectedCategories = () => {
    productsCategories.forEach((element) => {
        element.classList.remove("active");
    });
}

productsCategories.forEach((element, index) => {
    element.addEventListener("click", () => {
        cleanSelectedCategories();
        element.classList.add("active");
        selectedCategory = element.getAttribute("data-value");
        console.log(selectedCategory);
    });
});