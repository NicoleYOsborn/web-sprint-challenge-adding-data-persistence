const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/projects', (req,res)=>{
    Projects.getProjects()
    .then(projects =>{
        res.status(200).json(projects);
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({message: 'failed to get projects'})
    })
})

router.get('/resources', (req,res)=>{
    Projects.getResources()
    .then(resources =>{
        res.status(200).json(resources);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'failed to get resources'})
    })
})

router.get('/tasks', (req, res)=>{
    Projects.getTasks()
    .then(tasks =>{
        res.status(200).json(tasks);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'unable to get tasks'})
    })
})

router.post('/projects', (req,res)=>{
    const project = req.body;
    Projects.addProject(project)
    .then(project =>{
        res.status(201).json(project);
    })
    .catch(err=>{
        res.status(500).json({message: 'unable to add project'})
    })
})

router.post('/resources', (req,res)=>{
    const resource = req.body;
    Projects.addResource(resource)
    .then(resource =>{
        res.status(201).json(resource);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'unable to post resource'})
    })
})

router.post('/tasks', (req,res)=>{
    const task = req.body;
    Projects.addTask(task)
    .then(task=>{
        res.status(201).json(task);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'unable to post task'})
    })
})
//STRETCH - project resources
router.get('/project_resources/:id', (req, res)=>{
    const {id} = req.params;
    Projects.getProjectResources(id)
    .then(list =>{
        res.status(200).json(list);
    })
    .catch(error=>{
        res.status(500).json({message: "unable to get resource list"})
    })
})

//STRETCH - project tasks
router.get('/project_tasks/:id', (req, res)=>{
    const {id} = req.params;
    Projects.getProjectTasks(id)
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(error=>{
        res.status(500).json({message: 'unable to get project tasks'})
    })
})

//STRETCH - Get all projects that use a particular resource
router.get('/projects_by_resource/:id', (req, res)=>{
    const {id} = req.params;
    Projects.getProjectsByResource(id)
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(error=>{
        res.status(500).json({message: "unable to get projects that use the given resource"})
    })
})

module.exports = router;