import "./components/nav";
import "./components/card";
import * as menu from "./menu";
import * as ratings from "./components/ratings";
import "./components/slider";
import card from "./components/card";

class App {
  state = {
    pizzas: [],
  };

  constructor() {
    // Get menu and save it
    this.state.pizzas = menu.getAllMenuDishes();

    // Render items in menu section
    card.initMenu(this.state.pizzas);

    // Initialize scroll
    ratings.initScroll();

    // Initialize slider
  }
}

new App();
