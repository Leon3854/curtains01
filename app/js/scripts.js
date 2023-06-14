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
  informNavbar.forEach((item) => {
    let head = item.querySelector(".footer-information-main-title");
    head.addEventListener("click", (e) => {
      let title = head.nextElementSibling;
      head.classList.toggle("active");
      title.classList.toggle("active");
    });
  });

  $(".main-slider_carousel-block").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="main-slider_carousel-block slick-prev"><img src="../images/src/icons/arrow-prev.svg" alt="arrow-prev" /></button>',
    nextArrow:
      '<button type="button" class="main-slider_carousel-block slick-next"><img src="../images/src/icons/arrow-circle.svg" alt="arrow-next" /></button>',
    responsive: [
      {
        breakpoint: 526,
        settings: {
          dots: false,
          arrows: false,
          autopplay: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          dots: false,
          arrows: false,
          autopplay: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          dots: false,
          arrows: false,
          autopplay: true,
        },
      },
      {
        breakpoint: 321,
        settings: {
          dots: false,
          arrows: false,
          autopplay: true,
        },
      },
    ],
  });
});
