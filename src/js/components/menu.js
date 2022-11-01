class Menu {
  // If user refreshed / loaded page with screen smaller than 768px then the value is true
  _loadedOnPhone = window.matchMedia("(max-width: 48em)").matches;

  _menu = document.querySelector(".menu__container");
  _btnCollapseMenu;
  _isMenuCollapsed = this._loadedOnPhone ? true : false;

  constructor() {}

  initMenu(menu) {
    this._renderMenu(menu);
    this._renderLink();
  }

  // If slice first two elements in Array probably "true" should be added
  _renderMenu(menu) {
    menu.forEach((dish) => {
      const markup = `
        <div class="card ${dish.collapsable ? "collapsable" : ""} ${
        this._loadedOnPhone && dish.collapsable ? "hidden--desktop" : ""
      }">
            <div class="card__top">
              <img class="card__image" src="${dish.imgPath}" alt="${
        dish.type
      } ${dish.id} image">
                <h3 class="card__h3">${dish.type}</h3>
                <h1 class="card__h1">${dish.name}</h1>
            </div>
            <div class="card__main">
                <p class="card__ingredients">
                    ${dish.ingredients.join(", ")}
                </p>
                <h2 class="card__price__heading card__price">${
                  dish.price
                } zł</h2>
            </div>
        </div>
      `;
      this._menu.insertAdjacentHTML("beforeend", markup);
    });
  }

  _renderLink() {
    const markup = `
        <a id="menu-btn" class="link-1 menu__button hidden--mobile">${
          this._loadedOnPhone ? "Rozwiń" : "Zwiń"
        } menu</a>
    `;

    this._menu.insertAdjacentHTML("beforeend", markup);

    this._btnCollapseMenu = document.querySelector("#menu-btn");

    this._btnCollapseMenu.addEventListener("click", (e) => {
      e.preventDefault();

      location.hash = "";

      document
        .querySelectorAll(".collapsable")
        .forEach((card) => card.classList.toggle("hidden--desktop"));

      location.hash = "#menu";

      // Update Link textContent
      document
        .querySelector(".collapsable")
        .classList.contains("hidden--desktop")
        ? (this._btnCollapseMenu.textContent = "Rozwiń menu")
        : (this._btnCollapseMenu.textContent = "Zwiń menu");
    });
  }
}

export default new Menu();
