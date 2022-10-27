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
    this.state.pizzas = menu.initMenu();
    console.log(this.state.pizzas);
    card.renderMenu(this.state.pizzas);
  }
}

new App();
