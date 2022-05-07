export function openBurger() {
  const burger = document.querySelector(".header__burger");
  const aside = document.querySelector(".aside");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-rotate");
    aside.classList.toggle("aside-active");
  });
}
