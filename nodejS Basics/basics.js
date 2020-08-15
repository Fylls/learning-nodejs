const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === "/") {
    res.write("<html>")

    res.write("<head><title>Enter Message</title><head>")

    res.write("<body>")
    res.write('<form action="/message" method="POST">')
    res.write('<input type="text" name="message">')
    res.write('<button type="submit">Send</button>')
    res.write("</form>")
    res.write("</body>")

    res.write("</html>")
    return res.end()
  }

  if (url === "/message" && method === "POST") {
    const body = []

    // "data" & "end" are event listeners

    req.on("data", chunk => body.push(chunk)) // <Buffer 6d 7b 78 45 a5 9b 00 77 76>

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString() // message=<value>
      const message = parsedBody.split("=")[1] // <value>
      fs.writeFileSync("message.txt", message)

      res.statusCode = 302
      res.setHeader("Location", "/")
      return res.end()
    })
  }

  res.setHeader("Content-Type", "text/html")
  res.write("<html>")
  res.write("<head><title>My First Page</title><head>")
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>")
  res.write("</html>")
  res.end()
})

server.listen(3000)
