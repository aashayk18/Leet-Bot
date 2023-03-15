const express = require("express")
const cors = require("cors")
const axios = require("axios")
const bodyparser = require("body-parser")
const config = require("./config")
var app = express()
const port = process.env.port || 3000
const clientId = process.env.client_id || config.client_id
const clientSecret = process.env.client_secret || config.client_secret


const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
}

app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/getaccess", (req, res) => {
    const accessCode = req.query.code
    
    console.log(clientId + " " + clientSecret + accessCode)
    axios.post("https://github.com/login/oauth/access_token",null, {
        params: {
            client_id: clientId,
            client_secret: clientSecret,
            code: accessCode
        }
    }).then(
        (res) => {
            console.log(res.data);
        }
    ).catch((err) => {})
})



app.use(express.static('public'))

app.listen(port, () => {
    console.log("Server running")
})