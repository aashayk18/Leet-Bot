const express = require("express")
const cors = require("cors")
const axios = require("axios")
const bodyparser = require("body-parser")
const config = require("./config")
const path = require("path")
const saveToken = require("./controllers/saveToken")
var app = express()

const { Octokit } = require("@octokit/rest");


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

app.use(express.static('public'))

app.get("/installapp",((req,res)=>{
    res.sendFile(path.join(__dirname,"/public","install.html"))
}))

// Github Redirect leads here
app.get("/getaccess", (req, res) => {
    const accessCode = req.query.code

    console.log(clientId + " " + clientSecret + accessCode)
    axios.post("https://github.com/login/oauth/access_token", null, {
        params: {
            client_id: clientId,
            client_secret: clientSecret,
            code: accessCode
        }
    }).then(
        (accessToken) => {
            const firstIndex = 13
            let endIndex = accessToken.data.search("&")
            const token = accessToken.data.substring(firstIndex, endIndex)
            /*const octokit = new Octokit({
                auth: token,
            });
            octokit.request('GET /user', {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }).then((username) => {
                console.log(username.data.login)
            })
            octokit.request('GET /user', {
                installation_id : "",
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }).then((username) => {
                console.log(username.data.login)
            })*/
            res.cookie("token",token)
            res.sendFile(path.join(__dirname,"/public/callbackPage","access.html"))
        }
    ).catch((err) => { })
})




app.listen(port, () => {
    console.log("Server running")
})