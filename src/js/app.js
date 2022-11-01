import "./components/nav";
import "./components/menu";
import "./components/slider";
import { getAllMenuDishes } from "./dishes";
import { initScroll } from "./components/ratings";


class App {
  state = {
    pizzas: [],
  };

  constructor() {
    // Get menu and save it
    this.state.pizzas = getAllMenuDishes();

    // Render items in menu section
    menu.initMenu(this.state.pizzas);

    // Initialize scroll in ratings section
    initScroll();
  }
}

new App();
