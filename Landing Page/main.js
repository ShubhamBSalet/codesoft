const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".icon-box", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 200,
  interval: 200,
});

ScrollReveal().reveal(".testimonial", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 300,
  interval: 300,
});

ScrollReveal().reveal("footer", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});
