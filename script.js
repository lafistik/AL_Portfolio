const btns = document.querySelectorAll(".icon-mobile-nav");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav__item");
const heading = document.querySelector("h1");
const body = document.querySelector("body");

// const heroSection = document.querySelector(".hero-section");

// const images = document.querySelectorAll("img");
// const popup = document.querySelector(".popup-img");
// const closeBtn = document.querySelector(".popup-img span");

// MENU TOGGLE

btns.forEach(function (button) {
  button.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
  });
});

navItem.forEach(function (item) {
  item.addEventListener("click", function () {
    nav.classList.remove("nav-open");
  });
});

// STICKY NAV

const handler = (entries) => {
  console.log(entries[0]);

  if (entries[0].isIntersecting) {
    body.style.paddingTop = 0;
    nav.classList.remove("sticky");
  } else {
    body.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("sticky");
  }
};

let options = {
  threshold: 1,
};

const observer = new window.IntersectionObserver(handler, options);
observer.observe(heading);

// images.forEach((image) => {
//   image.onclick = () => {
//     popup.style.display = "block";
//     document.querySelector(".popup-img img").src = image.getAttribute("src");
//   };
// });

// closeBtn.addEventListener("click", () => {
//   popup.style.display = "none";
// });

// const body = document.querySelector("body");

// const section = document.querySelector(".section");
// const nav = document.querySelector(".nav");
// const h1 = document.querySelector("h1");
// const header = document.querySelector(".header");

// // MAIN PAGE

// // const headerHandler = (entries) => {
// //   if (entries[0].isIntersecting) {
// //     nav.classList.remove("sticky");
// //   } else {
// //     nav.classList.add("sticky");
// //   }
// // };

// // let headerOptions = {
// //   // A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
// //   threshold: 0,
// //   // A threshold of 0 means that when 0% of the target is visible within the element specified by the root option, the callback is invoked.
// //   rootMargin: "-100px",
// // };

// // const headerObs = new window.IntersectionObserver(headerHandler, headerOptions);
// // headerObs.observe(header);
