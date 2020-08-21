// Cookies    =>   Client side
// Sessions   =>   Server Side

// persists across requests but not across users

const session = require("express-session")

// Middleware
app.use(
  session({
    secret: "my secret",
    resave: false, // saves only if changes
    saveUninitialized: false, // avois useless savings
    //cookie: {MAx-Age: 100}
  })
)

req.session.isLoggedIn = true
