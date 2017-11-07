
exports.seed = knex => {

      // Inserts seed entries
      return knex('full_movies').insert([
        {id: 1, title: 'monster in the closet'},
        {id: 2, title: 'programmed to kill'},
        {id: 3, title: 'tammy and the t-rex'},
        {id: 4, title: 'meet the deedles'},
        {id: 5, title: 'pleasantville'},
        {id: 6, title: 'varsity blues'},
        {id: 7, title: "she's all that"},
        {id: 8, title: 'brokedown palace'},
        {id: 9, title: 'the skulls'},
        {id: 10, title: 'the fast and the furious'},
        {id: 11, title: 'joy ride'},
        {id: 12, title: "life makes sense if you're famous"},
        {id: 13, title: '2 fast 2 furious'},
        {id: 14, title: 'timeline'},
        {id: 15, title: 'noel'},
        {id: 16, title: 'into the blue'},
        {id: 17, title: 'eight below'},
        {id: 18, title: 'running scared'},
        {id: 19, title: 'flags of our fathers'},
        {id: 20, title: 'the death and life of bobby z'},
        {id: 21, title: 'stories usa'},
        {id: 22, title: 'the lazarus project'},
        {id: 23, title: 'fast & furious'},
        {id: 24, title: 'takers'},
        {id: 25, title: 'fast five'},
        {id: 26, title: 'vehicle 19'},
        {id: 27, title: 'fast & furious 6'},
        {id: 28, title: 'pawn shop chronicles'},
        {id: 29, title: 'hours'},
        {id: 30, title: 'brick mansions'},
        {id: 31, title: 'furious 7'},
        {id: 32, title: 'fast and furious'},
        {id: 33, title: 'fast and furious 6'}
      ]).then(() => {
    return knex.raw(
      `SELECT setval('full_movies_id_seq', (SELECT MAX(id) FROM full_movies));`
    );
  })
};
