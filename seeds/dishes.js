exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "French Spring Soup" },
    { name: "Garlic Chicken" },
    { name: "Fettuccine Alfredo" },
    { name: "Four Cheese Margherita Pizza" }
  ]);
};
