const navLinks = document.querySelectorAll("a.nav-link");

navadd.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));
    const scrollOptions = {
      behavior: "smooth",
    };

    targetSection.scrollIntoView(scrollOptions);
  });
});
