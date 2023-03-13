const express = require("express")
const cors = require("cors")
const axios = require("axios")
const bodyparser = require("body-parser")
var app = express()
const port = process.env.port || 3000


const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
}

app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/getaccess", (req, res) => {
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



app.use(express.static('public'))

app.listen(port,()=>{
    console.log("Server running")
})