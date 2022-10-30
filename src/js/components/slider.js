class Slider {
  _images = document.querySelectorAll(".slider__image");
  _currentSlide = 0;
  _LAST_SLIDE = this._images.length - 1;

  _dotsContainer = document.querySelector(".slider__dots");
  // Value asigned in _renderDots function
  _dots;
  _slider = document.querySelector(".slider");

  _btnRight = document.querySelector(".slider__btn--right");
  _btnLeft = document.querySelector(".slider__btn--left");

  constructor() {
    this._renderDots();
    this._slideTo(0);

    this._btnRight.addEventListener("click", this._slideNext.bind(this));
    this._btnLeft.addEventListener("click", this._slidePrevious.bind(this));
    document.addEventListener("keydown", (e) => this._slideWithKeyboard(e));
    this._dotsContainer.addEventListener("click", (e) => this._slideWithDot(e));
  }

  _renderDots() {
    this._images.forEach((_, i) => {
      const markup = `
          <div id="slider__dot-${i + 1}" class="slider__dot"></div>
        `;

      this._dotsContainer.insertAdjacentHTML("beforeend", markup);
    });

    this._dots = document.querySelectorAll(".slider__dot");

    this._activateDot();
  }

  _disactivateDots() {
    this._dots.forEach((dot) => dot.classList.remove("slider__dot--active"));
  }

  _activateDot() {
    document
      .querySelector(`#slider__dot-${this._currentSlide + 1}`)
      .classList.add("slider__dot--active");
  }

  _slideTo(slide = this._currentSlide) {
    this._images.forEach(
      (image, index) =>
        (image.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  }

  _slideNext() {
    this._currentSlide === this._LAST_SLIDE
      ? (this._currentSlide = 0)
      : this._currentSlide++;

    this._disactivateDots();
    this._activateDot();
    this._slideTo();
  }

  _slidePrevious() {
    this._currentSlide === 0
      ? (this._currentSlide = this._LAST_SLIDE)
      : this._currentSlide--;

    this._disactivateDots();
    this._activateDot();
    this._slideTo();
  }

  // on clicking dot
  _slideWithDot(e) {
    if (e.target.classList.contains("slider__dot")) {
      const index = +e.target.id.slice(-1);
      this._currentSlide = index - 1;
      this._disactivateDots();
      this._activateDot();
      this._slideTo(index - 1);
    }
  }

  _slideWithKeyboard(e) {
    if (e.key === "ArrowLeft") this._slidePrevious();
    if (e.key === "ArrowRight") this._slideNext();
  }
}

export default new Slider();
