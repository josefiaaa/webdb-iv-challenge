exports.up = function(knex, Promise) {

  return knex.schema

    .createTable('dishes', table => {
        table.increments();

        table
            .string('name', 130)
            .notNullable()
            .unique();
    })

    .createTable('recipies', table => {
        table.increments();

        table
            .string('name', 130)
            .notNullable()
            .unique();
        table
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

    })

    .createTable('ingredients', table => {
        table.increments();

        table
            .string('name', 130)
            .notNullable()
    })

    .createTable('recipe_ingredients', table => {
        table.increments();

        table
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipies')
         table
            .integer('ingredients_id')
            .notNullable()
            .unsigned()
            .inTable('ingredients')
            .references('id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {

    return knex.schema

    .dropTableIfExists('recipie_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipies')
    .dropTableIfExists('dishes')
  
};
