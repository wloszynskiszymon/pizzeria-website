class Nav {
  _navButton = document.querySelector(".nav__button");
  _navIcon = document.querySelector(".nav__icon");
  _navBox = document.querySelector(".nav__box");

  constructor() {
    this._navButton.addEventListener("click", () => {
      this._navBox.classList.toggle("hidden");
    });

    this._navBox.addEventListener("click", () => {
      this._navBox.classList.add("hidden");
    });
  }
}

export default new Nav();
