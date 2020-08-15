const http = require("http")

// importing from other files
const routes = require("./routes")

console.log(routes.text)

// "please execute this function as a request handler"
const server = http.createServer(routes.handler)

server.listen(3000)
