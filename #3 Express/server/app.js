const express = require("express")
const app = express()

// Route only if: GET "/"
app.get("/user", (req, res) => res.send("<h1>welcome to user</h1>"))

app.get("/lol", (req, res) => res.send("<h1>welcome to lol</h1>"))

app.get("/", (req, res) => res.send("<h1>welcome to home</h1>"))

app.listen(3000)
