// Imagined data. Real one would be probably stored in some kind of database alongside with images. Function require() is needed so JavaScript knows image path after Parcel builds the project and changes all names of images and files.
export const initMenu = function () {
  const menu = [
    {
      id: 1,
      name: "dokusso",
      type: "pizza",
      imgPath: require("../img/images/pizza-dokusso.jpg"),
      ingredients: ["kabanos", "oliwki", "papryka", "ser", "szypiorek"],
      price: 35.99,
    },

    {
      id: 2,
      name: "hinulitta",
      type: "pizza",
      imgPath: require("../img/images/pizza-hinulitta.jpg"),
      ingredients: ["wieprzowina", "papryka", "ser", "pieczarki", "krewetki"],
      price: 31.99,
    },
    {
      id: 3,
      name: "kropodilla",
      type: "pizza",
      imgPath: require("../img/images/pizza-kropodilla.jpg"),
      ingredients: ["boczek", "oliwki", "ser", "pomidor", "ogórek"],
      price: 26.99,
    },
    {
      id: 4,
      name: "neapolitana",
      type: "pizza",
      imgPath: require("../img/images/pizza-neapolitana.jpg"),
      ingredients: ["pomidory", "twardy ser", "bazylia", "oliwa", "mozarella"],
      price: 25.99,
    },

    {
      id: 5,
      name: "vegetariana",
      type: "pizza",
      imgPath: require("../img/images/pizza-vegetariana.jpg"),
      ingredients: ["szypiorek", "sałata", "papryka", "pomidor", "śmietana"],
      price: 37.99,
    },

    {
      id: 6,
      name: "vesuvio",
      type: "pizza",
      imgPath: require("../img/images/pizza-vesuvio.jpg"),
      ingredients: [
        "oregano",
        "cebula",
        "mozarella",
        "sos pomidorowy",
        "szynka wieprzowa wędzona",
      ],
      price: 24.99,
    },

    {
      id: 7,
      name: "welofaitta",
      type: "pizza",
      imgPath: require("../img/images/pizza-welofaitta.jpg"),
      ingredients: [
        "baranina",
        "papryczka chilli",
        "ser",
        "pieczarki",
        "cebula",
      ],
      price: 29.99,
    },

    {
      id: 8,
      name: "włoska",
      type: "pizza",
      imgPath: require("../img/images/pizza-włoska.jpg"),
      ingredients: ["salami", "kabanos", "szynka", "ananas", "papryka"],
      price: 32.99,
    },
  ];

  return menu;
};
