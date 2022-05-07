export function heroSliderRoll() {
  const sliderButtons = document.querySelectorAll(".slider-navigation__number");
  const slides = document.querySelectorAll(".hero__slide");
  const sliderContainer = document.querySelector(".hero__slider-container");

  let slideHeight;
  let index = 0;
  let marginSlide = getComputedStyle(slides[0]).marginBottom;
  let marginSlideNumber = parseInt(marginSlide.substring(0, marginSlide.length - 2));

  function heroActiveButton(i) {
    sliderButtons.forEach((button) => {
      button.classList.remove("number-active");
    });
    sliderButtons[i].classList.add("number-active");
  }

  function init() {
    slideHeight = slides[1].offsetHeight;
    sliderContainer.style.height = slideHeight + "px";
    rollSlider(index);
  }

  function rollSlider(index) {
    sliderContainer.style.transform = `translateY(-${(marginSlideNumber + slideHeight) * index}px)`;
  }

  sliderButtons.forEach((button, indexbutton) => {
    button.addEventListener("click", () => {
      heroActiveButton(indexbutton);
      rollSlider(indexbutton);
    });
  });

  window.addEventListener("resize", init);
  init();
}
