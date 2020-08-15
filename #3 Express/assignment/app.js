const express = require("express")
const path = require("path")
const app = express()

const users = require("./data")
const user = require("./data")

const userHTML = () => {
  const head = `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>MY Server</title></head>`

  const body1 = "<body><ul>"

  const listHTMLArray = []
  for (user of users) listHTMLArray.push(`<li>${user}</li>`)
  const listHTML = listHTMLArray.join("")

  const body2 = "</ul></body></html>"

  return head + body1 + listHTML + body2
}

const homeHTML = () => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MY Server</title>
      </head>
    
      <body>
        <h1>Hello To my server!</h1>
        <form action="/createUser" method="POST">
          <input type="text" name="username" />
          <button type="submit">Create User</button>
        </form>
      </body>
    </html>
    `
}

// Route only if: GET "/"
app.get("/", (req, res) => res.send(homeHTML()))

app.get("/users", (req, res) => res.send(userHTML()))

app.post("/createUser", (req, res) => console.log(req))

app.listen(3000, () => console.log("server started"))
