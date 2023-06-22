const Task = require("../db/models/Task");

exports.getTaskList = (req, res)=>{
    res.send("Get Task List")
}

exports.createTask = (req, res) =>{
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        created: Date.now(),
        priority: req.body.priority,
        user: "Sazzad",
        updated: Date.now(),
       })
       
       task.save(function(err){
        if(err) {
            console.log(err);
            res.send({success: false, message: err.message});
        }
        res.send({success: true, message: "Created Successfully"});
    });
    res.send("Post Task")
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

