export const caurosel = (sectionName) => {
  const sliderContainer = document.querySelector(`.${sectionName}-slider__container`);
  const slides = document.querySelectorAll(`.${sectionName}-slider__slide`);
  const sliderButtons = document.querySelectorAll(`.${sectionName}-slider__btn`);

  const activeButton = (index) => {
    sliderButtons.forEach((btn) => {
      btn.classList.remove(`${sectionName}-btn-active`);
    });
    sliderButtons[index].classList.add(`${sectionName}-btn-active`);
  };

  const rollSlider = (count) => {
    let widthSlide = slides[0].offsetWidth;
    sliderContainer.style.transform = `translate(-${count * widthSlide}px)`;
  };

  const pressesButtons = () => {
    sliderButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        activeButton(index);
        rollSlider(index);
      });
    });
  };

  pressesButtons();
};
