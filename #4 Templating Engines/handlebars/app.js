// native modules
const path = require("path")

// dependencies
const express = require("express")
const bodyParser = require("body-parser")
const expressHbs = require("express-handlebars")

// request handler
const app = express()

// handlebars
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
)

app.set("view engine", "hbs")
app.set("views", "views")

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
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" })
})

// starting the server
const PORT = 3000
app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
