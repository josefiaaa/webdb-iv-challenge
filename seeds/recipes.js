exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: '1lb leeks, 3 lage potatoes, 1 onion', dish_id: 1 },
    { name: '1/4 cup Italian-seasoned bread crumbs, 4 skinless boneless chicken breast halves, 1/4 cup grated Parmesan cheese', dish_id: 2 },
    { name: '24oz dry Fettuccine pasta, 3/4 pint heavy cream, dash of garlic salt', dish_id: 3 },
    { name: '8 Roma Tomatoes, 8oz Shredded Mozzarella, 10 fresh Basil Leaves, 4oz Fontina cheese', dish_id: 4 }
  ]);
};