
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([{
        id: 1,
        description: "pick out color",
        project_id: 1
      }, {
        id: 2,
        description: "purchase paint",
        project_id: 1
      }, {
        id: 3,
        description: "clean walls",
        project_id: 1
      }, {
        id: 4,
        description: "paint",
        project_id: 1
      }, {
        id: 5,
        description: "empty out cabinets",
        project_id: 2
      }, {
        id: 6,
        description: "remove cabinet doors",
        notes: 'allow paint to dry for 24 hours',
        project_id: 2
      }, {
        id: 7,
        description: "paint the doors",
        project_id: 2
      }, {
        id: 8,
        description: "reattach cabinet doors",
        project_id: 2
      }, {
        id: 9,
        description: "wash outdoor windows",
        project_id: 3
      }, {
        id: 10,
        description: "wash inside windows",
        project_id: 3
      }, {
        id: 11,
        description: "wipe down blinds",
        project_id: 3
      }]);
    });
};
