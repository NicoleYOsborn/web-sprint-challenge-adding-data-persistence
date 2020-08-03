const db = require('../data/db-config.js')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
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