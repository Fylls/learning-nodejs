const users = require("./data")

const routes = (req, res) => {
  const url = req.url
  const method = req.method

  // GET "/"
  if (url === "/") {
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>MY Server Page</title></head>")
    res.write("<body><h1>Hello To my server!</h1>")
    res.write(
      '<form action="/createUser" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>'
    )
    res.write("</html>")
    return res.end()
  }

  // GET "/users"
  if (url === "/users") {
    res.write("<html>")
    res.write("<body>")
    res.write("<ul>")

    // Dynamic HTML Template
    for (user of users) res.write(`<li>${user}</li>`)

    res.write("</ul>")
    res.write("<body/>")
    res.write("</html>")
    return res.end()
  }

  // POST "/createUser"
  if (url === "/createUser" && method === "POST") {
    const body = []

    req.on("data", chunk => body.push(chunk)) // <Buffer 6d 7b 78 45 a5 9b 00 77 76>

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString() // username=<value>
      const user = parsedBody.split("=")[1] // <value>
      console.log(user)

      users.push(user)

      res.statusCode = 302
      res.setHeader("Location", "/users")
      return res.end()
    })
  }
}

module.exports = routes
