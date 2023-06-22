const Task = require("../db/models/Task");

exports.getTaskList = (req, res)=>{
    res.send("Get Task List")
}

exports.createTask = (req, res) =>{
    const task = new Task({
        title: req.body.title,
        description: req.body.description || "",
        completed: req.body.completed ||  false,
        created: Date.now(),
        priority: req.body.priority || "High",
        user: req.body.user,
        updated: Date.now(),
       })
       
       task.save(function(err, result){
        if(err) {
            console.log(err);
            res.json({success: false, message: err.message});
        }
        res.json({success: true, data: result});
    });
}

exports.getTask = (req, res)=>{
    res.send("Get Task")
}

exports.updateTask = (req, res) =>{
    res.send("Update task")
}

exports.deleteTask = (req, res)=>{
    res.send("Delete Task")
}

