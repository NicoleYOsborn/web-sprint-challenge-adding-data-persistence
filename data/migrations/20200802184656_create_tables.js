
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl =>{
      tbl.increments();
      tbl.string('name', 400).notNullable();
      tbl.string('description', 400);
      tbl.boolean('completed').defaultTo(false);
  })
  .createTable('tasks', tbl=>{
      tbl.increments();
      tbl.string('description', 400).notNullable();
      tbl.string('notes', 500);
      tbl.boolean('completed').defaultTo(false);
      tbl.integer('project_id').unsigned().notNullable().references("projects.id").onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('resources', tbl =>{
      tbl.increments();
      tbl.string('resource_name', 400).notNullable();
      tbl.string('description', 400);
  })
  .createTable('project_resources', tbl=>{
      tbl.integer('project_id').unsigned().notNullable().references('projects.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('resource_id').unsigned().notNullable().references('resources.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
