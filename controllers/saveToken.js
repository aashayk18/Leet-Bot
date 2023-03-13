const mongooose = require("mongoose")

exports.addToken = (req, res) => {
    mongooose.connect(config.mongoDbUrl, { useNewUrlParser: true }, err => {
        let result = {}
        let status = 201
        if (!err) {
            const token = req.body.token
        }
    })
}