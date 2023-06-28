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
  // home page slider
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
  // category slider
  $(".category-slider_list").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="main-slider_carousel-block slick-prev"><img src="../images/src/icons/arrow-prev.svg" alt="arrow-prev" /></button>',
    nextArrow:
      '<button type="button" class="main-slider_carousel-block slick-next"><img src="../images/src/icons/arrow-circle.svg" alt="arrow-next" /></button>',
    speed: 2000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 861,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // recommended goods slider
  $(".recommended-goods__list").slick({
    dots: false,
    arrows: false,
    speed: 2500,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 5,
    autoplay: true,
    infinite: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 3,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 726,
        settings: {
          slidesToShow: 3,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
          // centerMode: fals,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 462,
        settings: {
          slidesToShow: 2,
          // centerPadding: "20px",
          centerMode: false,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
          // centerMode: false,
        },
      },
      {
        breakpoint: 322,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
          // centerMode: false,
        },
      },
    ],
  });
  //
  // popular goods
  $(".slider-slick__list").slick({
    dots: false,
    arrows: true,
    speed: 2500,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 4,
    autoplay: true,
    infinite: true,
    centerPadding: "70px",
    prevArrow:
      '<button type="button" class="slider-slick__list slick-prev"><img src="../images/src/icons/arrow-prev.svg" alt="arrow-prev" /></button>',
    nextArrow:
      '<button type="button" class="slider-slick__list slick-next"><img src="../images/src/icons/arrow-circle.svg" alt="arrow-next" /></button>',
  });
});
