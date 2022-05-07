export function sliders() {
  const carChekSliderButtons = document.querySelectorAll(".car-chek__slider-btn");
  const carChekSlides = document.querySelectorAll(".car-chek__slider-slide");
  const carChekSliderContainer = document.querySelector(".car-chek__slider-container");
  const carChekSlider = document.querySelector(".car-chek__slider");

  const compilationSlider = document.querySelector(".compilation__slider");
  const compilationSliderContainer = document.querySelector(".compilation-slider__container");
  const compilationSlides = document.querySelectorAll(".compilation-slider__slide");
  const compilationSlidersButtons = document.querySelectorAll(".compilation-slider__button");

  let sliderWidth;

  function activeButton(buttons, index, clas) {
    buttons.forEach((btn) => {
      btn.classList.remove(clas);
    });
    buttons[index].classList.add(clas);
  }

  function getWidth(slider, slides, container) {
    sliderWidth = slider.offsetWidth;
    container.style.width = sliderWidth * slides.length + "px";

    slides.forEach((slide) => {
      slide.style.width = sliderWidth + "px";
    });
  }

  function flipSlider(container, count) {
    console.log(count);
    container.style.transform = "translate(-" + count * sliderWidth + "px)";
    console.log(sliderWidth);
  }

  function buttonsClicks(button, clas, container) {
    button.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        activeButton(button, index, clas);
        flipSlider(container, index);
      });
    });
  }

  carChekSliderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      getWidth(carChekSlider, carChekSlides, carChekSliderContainer);
    });
  });

  compilationSlidersButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      getWidth(compilationSlider, compilationSlides, compilationSliderContainer);
    });
  });

  window.addEventListener("resize", () => {
    getWidth(carChekSlider, carChekSlides, carChekSliderContainer);
    getWidth(compilationSlider, compilationSlides, compilationSliderContainer);
  });

  buttonsClicks(carChekSliderButtons, "btn-active", carChekSliderContainer);
  buttonsClicks(compilationSlidersButtons, "compilation-slider__btn-active", compilationSliderContainer);

  getWidth(carChekSlider, carChekSlides, carChekSliderContainer);
  getWidth(compilationSlider, compilationSlides, compilationSliderContainer);
}
