const express = require('express');
const Task = require('../db/models/Task');
const { createTask, getTaskList, getTask, deleteTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getTaskList)

router.post('/', createTask)

router.get('/:id', getTask)

router.delete('/:id', deleteTask)

module.exports = router;