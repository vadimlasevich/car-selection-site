export const heroSliderRoll = () => {
  const sliderButtons = document.querySelectorAll('.slider-navigation__number');
  const slides = document.querySelectorAll('.hero__slide');
  const sliderContainer = document.querySelector('.hero__slider-container');

  const activeButton = (index) => {
    sliderButtons.forEach((button) => {
      button.classList.remove('number-active');
    });
    sliderButtons[index].classList.add('number-active');
  };

  const rollSlider = (index) => {
    let slideHeight = slides[0].offsetHeight;
    sliderContainer.style.transform = `translateY(-${slideHeight * index}px)`;
  };

  sliderButtons.forEach((button, indexButton) => {
    button.addEventListener('click', () => {
      activeButton(indexButton);
      rollSlider(indexButton);
    });
  });
};
