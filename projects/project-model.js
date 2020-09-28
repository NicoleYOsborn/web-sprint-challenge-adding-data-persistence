const db = require('../data/db-config.js')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
    getProjectResources,
    getProjectTasks
}

function getProjects(){
    return db('projects');
}

function getResources(){
    return db('resources');
}

function getTasks(){
    return db('projects as p')
    .join('tasks as t', 't.project_id', 'p.id')
    .select('t.description as task', 't.notes', 't.completed', 'p.name as project', 'p.description');
}

function addProject(project){
    return db('projects')
    .insert(project);
}

function addResource(resource){
    return db('resources')
    .insert(resource);
}

function addTask(task){
    return db('tasks')
    .insert(task);
}

//STRETCH - "Get a list of project resources"

function getProjectResources(project_id){
    return db('resources as r')
    .join('project_resources as pr', 'pr.resource_id', 'r.id')
    .select('r.resource_name')
    .where({project_id})

}

//STRETCH - "Get a list of project tasks"

function getProjectTasks(project_id){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.description')
    .where({project_id})
    .orderBy('t.id')
}
