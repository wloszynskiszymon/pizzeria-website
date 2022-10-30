class Nav {
  _nav = document.querySelector(".nav");
  _navButton = document.querySelector(".nav__button");
  _navIcon = document.querySelector(".nav__icon");
  _navBox = document.querySelector(".nav__box");

  constructor() {
    this._navButton.addEventListener("click", this._toggleNavBox.bind(this));
    this._navBox.addEventListener("click", this._hideNavBox.bind(this));
    window.addEventListener("resize", this._controlNavBox.bind(this));
  }

  _toggleNavBox() {
    this._navBox.classList.toggle("hidden");
  }

  _hideNavBox() {
    this._navBox.classList.add("hidden");
  }

  // If user resizes browser to value larger than 769px then navBox is being hidden
  _controlNavBox() {
    if (
      window.matchMedia("(min-width: 48.0625em)").matches &&
      !this._navBox.classList.contains("hidden")
    )
      this._hideNavBox();
  }
}

export default new Nav();
