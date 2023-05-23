document.addEventListener("DOMContentLoaded", () => {
  let btnCatalog = document.querySelector(".header-menu-button");
  let menuCatalog = document.querySelector(".popup-main-catalog");
  let catalogWrapper = document.querySelector(".popup-catalog-wrapper");
  // btnCatalog.classList.add("active");
  // Работаем с каталогом сайта
  btnCatalog.addEventListener("click", (e) => {
    e.preventDefault();
    // btnCatalog.classList.toggle("active");
    menuCatalog.classList.toggle("active");
    // catalogWrapper.classList.toggle("active");
  });
  menuCatalog.addEventListener("click", (e) => {
    menuCatalog.classList.toggle("active");
  });
});
