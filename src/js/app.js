import "./components/nav";
import "./components/menu";
import * as dishes from "./dishes";
import * as ratings from "./components/ratings";
import "./components/slider";
import menu from "./components/menu";

class App {
  state = {
    pizzas: [],
  };

  constructor() {
    // Get menu and save it
    this.state.pizzas = dishes.getAllMenuDishes();

    // Render items in menu section
    menu.initMenu(this.state.pizzas);

    // Initialize scroll
    ratings.initScroll();

    // Initialize slider
  }
}

new App();
