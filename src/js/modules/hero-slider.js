export function heroSliderRoll() {
  const sliderButtons = document.querySelectorAll(".slider-navigation__number");
  const slides = document.querySelectorAll(".hero__slide");
  const sliderContainer = document.querySelector(".hero__slider-container");

  let slideHeight = slides[0].offsetHeight;
  sliderContainer.style.height = slideHeight + "px";

  function heroActiveButton(i) {
    sliderButtons.forEach((button) => {
      button.classList.remove("number-active");
    });
    sliderButtons[i].classList.add("number-active");
  }

  function rollSlider(index) {
    sliderContainer.style.transform = "translateY(-" + index * slideHeight + "px)";
  }

  sliderButtons.forEach((button, indexbutton) => {
    button.addEventListener("click", () => {
      heroActiveButton(indexbutton);
      rollSlider(indexbutton);
    });
  });
}
