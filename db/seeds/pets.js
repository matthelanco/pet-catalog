exports.seed = function (knex, Promise) {
  // Delete ALL existing entries
  return knex('pets').del()
  .then(function() {
    return knex('pets').insert([
        {name: 'Oreo Grieve'},
        {name: 'Connor Porter'},
        {name: 'Ifrah Naseer'},
        {name: 'Suraj Sharma'}
    ]);
  });
};
