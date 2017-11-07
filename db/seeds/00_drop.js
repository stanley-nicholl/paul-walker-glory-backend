
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('full_movies').del()
    .then(() => knex('movies').del())
};
