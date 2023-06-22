const express = require("express");
const taskRouter = require('./task.route')
const router = express.Router()

router.use('/task', taskRouter)
module.exports = router;


