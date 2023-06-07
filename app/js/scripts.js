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
  // Секция для работы с навигацией подвала
  //
  let informNavbar = document.querySelectorAll(".inform-navbar-list");
  // let informTitle = document.querySelector(".footer-information-main-title");
  let informList = document.querySelector(".footer-information-list");
  informNavbar.forEach((item) => {
    let head = item.querySelector(".footer-information-main-title");
    // console.log(head);
    head.addEventListener("click", (e) => {
      let title = head.nextElementSibling;
      head.classList.toggle("active");
      title.classList.toggle("active");
    });
  });
});
