// WE DO'T NEED THIS ANYMORE
// const http = require("http")

// app is as well a valid "request handler"
// const server = http.createServer(app)

// in app requests get executed from top to bottom

const express = require("express")
const app = express()

// APP.USE() => // adding a new middleware function (in all routes)

// this will always run
app.use((req, res, next) => {
  console.log("middleware")
  next()
})

// without the previous next() this middleware won't be called

app.use((req, res, next) => {
  console.log(" another middleware")
  next()
})

// if no next we should expect a responce
// all possible routes will get this html
app.use((req, res, next) => {
  return res.send("<h1>welcome to express</h1>") // Header is setted automatically
})

app.listen(3000)
