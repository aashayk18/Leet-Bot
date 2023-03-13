const { default: mongoose } = require("mongoose")
const mongooose = require("mongoose")
const Tokens = require("./tokenModel")
exports.addToken = (token) => {
    mongooose.connect(config.mongoDbUrl, { useNewUrlParser: true }, err => {

        if (!err) {
            const token = req.body.token
            const user_name = req.body.username
            userToken = new Tokens({
                username: user_name,
                token: token
            })

            userToken.save((err, tok) => {
                if(err){
                    console.log(err.message)
                }
            })
        }
        else{
            console.log(err.message)

        }
    })
}

exports.getToken = (req, res) => {
    mongoose.connect(config.mongoDbUrl, { useNewUrlParser: true }, (err) => {
        const user_name = req.query.username
        Tokens.findOne({ username: user_name }, (err, token) => {
            res.send(token.token)
        })
    })              
}