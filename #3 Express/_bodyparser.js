// parsing the body with BP
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// parsing the body with Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
