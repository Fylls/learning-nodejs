const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// parsing the body with BP
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// or

// parsing the body with Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// express removed and readded and removed and finally readded BP from express.js library
// BP library won't change, however express.js can, so it is recommended to install body-parser and express separately

//                                                       FROM STACK OVERFLOW

// Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middlewares that came it.
// When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead.
/* The syntax then changed from */ app.use(express.json()) /* to */ app.use(bodyParser.json()) /* after installing the bodyParser module. */

// bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before.
/* That means you don't have to use */  bodyParser.json() /* anymore if you are on the latest release. You can use */ express.json() /* instead */

// The release history is for 4.16.0 is here for those who are interested, and the pull request here.