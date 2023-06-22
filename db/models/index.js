const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const syncModels = ()=>{
    const syncDb = []
    fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const model = require(path.join(__dirname, file))
        model.syncDB(function (err, result) {
            if (err) throw err;
        }
        )
    })
}

module.exports = {syncModels}

