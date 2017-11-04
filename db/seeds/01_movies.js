
exports.seed = knex => {

      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Varsity Blues', director: 'Brian Robbins', year: 1999, rating: 5, posterURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGVlYjRmYTUtNTRiYS00ODNmLThlNDQtNzc3OWJmYTlkMzM0L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'},
        {id: 2, title: 'The Fast and the Furious', director: 'Rob Cohen & Mel City', year: 2001, rating: 5, posterURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,672,1000_AL_.jpg'},
        {id: 3, title: 'The Skulls', director: 'Rob Cohen', year: 2000, rating: 5, posterURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODA2OTQ0NzctZTYwNi00N2E2LWJhN2UtOTc4N2UzYWRiOWVjL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'},
        {id: 4, title: `She's All That`, director: 'Robert Iscove', year: 1999, rating: 5, posterURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2Y0N2YyOTQtMGNiYy00ZDViLTgxYmItODkxNzlkMWVjNTFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'},
        {id: 5, title: 'Into the Blue', director: 'John Stockwell', year: 2005, rating: 5, posterURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMmVlM2FhODYtOWFhZi00YmE5LWIwNWUtZDMxNTlkNDgxNTA0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX673_AL_.jpg'}
      ]).then(() => {
    return knex.raw(
      `SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`
    );
  })
};
