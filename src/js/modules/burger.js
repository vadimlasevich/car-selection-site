export function openBurger() {
  const burger = document.querySelector(".header__burger");
  const aside = document.querySelector(".aside");
  const shadowed = document.querySelector(".shadowed");
  const asideLinks = document.querySelectorAll(".aside__nav-link");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-rotate");
    aside.classList.toggle("aside-active");
    shadowed.classList.toggle("shadowed-active");
    document.body.classList.toggle("stop-scroll");
  });

  // function closeBurger() {
  //   burger.classList.remove("burger-rotate");
  //   aside.classList.remove("aside-active");
  //   shadowed.classList.remove("shadowed-active");
  //   document.body.classList.remove("stop-scroll");
  // }
  asideLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.click();
    });
  });

  shadowed.addEventListener("click", () => {
    burger.click();
  });
}
