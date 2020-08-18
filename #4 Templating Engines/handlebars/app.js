// native modules
const path = require("path")

// dependencies
const express = require("express")
const bodyParser = require("body-parser")

// request handler
const app = express()

// middleware
app.use(bodyParser.urlencoded({ extended: false }))

// serving static files
app.use(express.static(path.join(__dirname, "public")))

// Routes defs
const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")

// Routes
app.use("/admin", adminData.routes)
app.use(shopRoutes)

// 404 page not found
app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
)

// starting the server
const PORT = 3000
app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
