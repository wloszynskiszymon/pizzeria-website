class Card {
  _menu = document.querySelector(".menu__container");

  renderMenu(menu) {
    menu.forEach((dish) => {
      const markup = `
    <div class="card">
        <div class="card__top">
          <img class="card__image" src="${dish.imgPath}" alt="${dish.type} ${
        dish.id
      } image">
            <h3 class="card__h3">${dish.type}</h3>
            <h1 class="card__h1">${dish.name}</h1>
        </div>
        <div class="card__main">
            <p class="card__ingredients">
                ${dish.ingredients.join(", ")}
            </p>
            <h2 class="card__price__heading card__price">${dish.price} zł</h2>
        </div>
    </div>
  `;
      this._menu.insertAdjacentHTML("beforeend", markup);
    });
  }
}

export default new Card();
