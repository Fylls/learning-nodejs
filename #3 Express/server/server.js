const http = require("http")
const express = require("express")

const app = express()

// app is as well a valid "request handler"
const server = http.createServer(app)

// APP.USE()

// adding a new middleware function
app.use((req, res, next) => {
  console.log("middleware")
  next()
})

// withoput the previous next this middleware won;t be called
// if no bext we should expect a responce
app.use((req, res, next) => {
  console.log(" another middleware")
  next()
})

// returning responce
app.use((req, res, next) => {
  return res.send("<h1>welcome to express</h1>") // Header is setted automatically
})

server.listen(3000, () => console.log("server started"))
