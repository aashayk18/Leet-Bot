const express = require("express")
const cors = require("cors")
const axios = require("axios")
var app = express()
const port = proces.env.port || 3000


const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
}

app.use(cors(corsOptions))

app.get("/callback", (req, res) => {
    // make request to github api using the code provided.
    const data = {
        // req.code, client id, client secret
    }
    axios.post("https://github.com/login/oauth/access_token", data).then(
        (res) => {
            // call saveToken controller
        }
    ).catch((err) => console.error(err))
    // serve a static webpage.
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'))