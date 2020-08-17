const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// parsing the body with BP
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// or

// parsing the body with Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// express removed and readded and removed and finally readded BP from express.js library
// BP library won't change, however express.js can, so it is recommended to install body-parser and express separately
