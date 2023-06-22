const client = require("../scylla");

module.exports = client.loadSchema('Task', {
    fields:{
        id: {
            type: "uuid",
            default: {"$db_function": "uuid()"}
        },
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
