const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('ingredients');
}

function findById(id) {
    return db('ingredients')
      .where({ id })
      .first();
}

function add(ingredient) {
    return db('ingredients')
      .insert(ingredient, 'id')
      .then(([id]) => {
        return findById(id);
    });
}

function update(id, changes) {
    return db('ingredients')
      .where({ id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          return findById(id);
        } else {
          return null;
        }
    });
}

function remove(id) {
    return db('ingredients')
      .where({ id })
      .del();
}