import "./components/nav";
import "./components/card";
import * as menu from "./menu";
import card from "./components/card";

class App {
  state = {
    pizzas: [],
  };

  constructor() {
    // Get menu and save it
    this.state.pizzas = menu.getAllMenuDishes();
    card.initMenu(this.state.pizzas);
  }
}

new App();
