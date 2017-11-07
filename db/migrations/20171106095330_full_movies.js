
exports.up = knex => {
  return knex.schema.createTable('full_movies', table => {
    table.increments()
    table.string('title').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  knex.schema.dropTable('full_movies')
};
