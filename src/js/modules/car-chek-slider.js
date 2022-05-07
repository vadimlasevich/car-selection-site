const carChekSliderButtons = document.querySelectorAll(".car-chek__slider-btn");
const carChekSlides = document.querySelectorAll(".car-chek__slider-slide");
const carChekSliderContainer = document.querySelector(".car-chek__slider-container");
const carChekSlider = document.querySelector(".car-chek__slider");

let carCheksliderWidth;

function activeButton(index) {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
  buttons[index].classList.add("btn-active");
}

function getWidth() {
  carCheksliderWidth = carChekSlides[0].offsetWidth;
  carChekSliderContainer.style.width = carCheksliderWidth * carChekSlides.length + "px";

  carChekSlides.forEach((slide) => {
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
});

buttonsClicks(carChekSliderButtons, "btn-active", carChekSliderContainer);

getWidth(carChekSlider, carChekSlides, carChekSliderContainer);
