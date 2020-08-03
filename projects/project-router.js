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


module.exports = router;