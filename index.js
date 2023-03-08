const express = require("express")
const cors = require("cors")
var app = express()
const port = proces.env.port || 3000


const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
}

app.use(cors(corsOptions))


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'))