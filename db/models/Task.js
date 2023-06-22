const client = require("../scylla");

module.exports = client.loadSchema('Task', {
    fields:{
        title    : "text",
        description : "text",
        completed     : "boolean",
        priority: "text",
        user: "text",
        created : "timestamp",
        updated: "timestamp"
    },
    key:["user"]
});
