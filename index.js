const express = require("express");
const cors = require("cors")
const { syncModels } = require("./db/models");
const apiRouter = require("./routes")
const app = express();
app.use(cors())

syncModels();

app.get('/', (req, res)=>{
     res.send("Welcome to todo app with scylladb project");
 })

app.use('/api', apiRouter)

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.listen(port, ()=>{ 
    console.log("Server is running...")
})