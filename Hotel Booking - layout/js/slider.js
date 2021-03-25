const slides = document.getElementsByClassName("slider-item");

const leftArrow = document.getElementsByClassName("slider-review-container__left-arrow");
const rightArrow = document.getElementsByClassName("slider-review-container__right-arrow");

leftArrow[0].addEventListener("click", () => {
    let sliderIndexLeft = getActiveIndex();

    hideActiveSlide(sliderIndexLeft);

    if (sliderIndexLeft <= 0) {
        slides[slides.length - 1].classList.add("slider-item--active");
    } else {
        --sliderIndexLeft;
        slides[sliderIndexLeft].classList.add("slider-item--active");
    }
});

rightArrow[0].addEventListener("click", () => {
    let sliderIndexRight = getActiveIndex();

    hideActiveSlide(sliderIndexRight);

    if (sliderIndexRight >= 0 && sliderIndexRight < slides.length - 1) {
        ++sliderIndexRight;

        slides[sliderIndexRight].classList.add("slider-item--active");
    } else if (sliderIndexRight >= slides.length - 1) {
        slides[0].classList.add("slider-item--active");
    }
});

function getActiveIndex() {
    for (let index = 0; index <= slides.length - 1; index++) {
        if (slides[index].classList.contains("slider-item--active")) {
            return index;
        }
    }
}

function hideActiveSlide(slideIndex) {
    slides[slideIndex].classList.remove("slider-item--active");
}

