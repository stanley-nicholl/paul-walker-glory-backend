
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('movies').del()
};
