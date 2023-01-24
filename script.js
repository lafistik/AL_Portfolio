const body = document.querySelector("body");
const section = document.querySelector(".section");
const nav = document.querySelector(".nav");
const h1 = document.querySelector("h1");
const header = document.querySelector(".header");

// MAIN PAGE

// const headerHandler = (entries) => {
//   if (entries[0].isIntersecting) {
//     nav.classList.remove("sticky");
//   } else {
//     nav.classList.add("sticky");
//   }
// };

// let headerOptions = {
//   // A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
//   threshold: 0,
//   // A threshold of 0 means that when 0% of the target is visible within the element specified by the root option, the callback is invoked.
//   rootMargin: "-100px",
// };

// const headerObs = new window.IntersectionObserver(headerHandler, headerOptions);
// headerObs.observe(header);
