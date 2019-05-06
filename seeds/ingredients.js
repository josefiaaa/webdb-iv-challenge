exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "Tomatoes" },
    { name: "Sugar" },
    { name: "Flour" },
    { name: "Eggs" },
    { name: "Potatoes" },
    { name: "Cheese" },
    { name: "Pasta" },
    { name: "Onions"},
    { name: "Breadcrumbs"}
  ]);
};
