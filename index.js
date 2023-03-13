const express = require("express")
const cors = require("cors")
const axios = require("axios")
const bodyparser = require("body-parser")
var app = express()
const port = process.env.port || 3000
const clientId = process.env.client_id
const clientSecret = process.env.client_secret


const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
}

app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/getaccess", (req, res) => {
    const accessCode = req.query.code
    axios.post("https://github.com/login/oauth/access_token", {
        params: {
            client_id: clientId,
            client_secret: clientSecret,
            code: accessCode
        }
    }).then(
        (res) => {
            saveToken.addToken(res.access_token);
        }
    ).catch((err) => console.error(err))
})



app.use(express.static('public'))

app.listen(port, () => {
    console.log("Server running")
})