const ExpressCassandra = require('express-cassandra');
module.exports = ExpressCassandra.createClient({ 
    clientOptions: {
        contactPoints: process.env.CONTACT_POINTS || ['scylla-node1', 'scylla-node2', 'scylla-node3'],
        localDataCenter: process.env.LOCAL_DATA_CENTER || 'DC1',
        keyspace: 'todo',
        queryOptions: {consistency: ExpressCassandra.consistencies.one},
        socketOptions: { readTimeout: 60000 },
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});