// With cookies we can store data in the browser of a single user
// and store data in that browser which is customized to that user which does not affect all the other users.
// but can be sent with requests to tell us "hey I already am authenticated"

// Bowser by default sends it to server with every request we make
// CROSS REQUEST DATASTORAGE

// Setting a cookie
res.setHeader("Srt-Cookie", "LoggedIn=true")

// Getting a cookie
res.get("Cookie").split(";")[n].trim().split("=")[1] // multiple
res.get("Cookie").split("=")[1] // 1 cookie

// IMPORTANT

// sensitive data should not be stored in the browser because users can edit them as you see.
// So whilst ncookies are generally a good thing for storing data across requests,
// it might not be the best approach in all scenarios and that is exactly something where sessions can help us with.

// TRACKING

// A cookie can also be sent to another page and that is a common instrument in tracking where you have that so-called
// tracking pixel on pages which is simply an image url with no real image but that image can be located on.
// let's say Google's servers and you have a cookie on that page which is also sent along with that
// and therefore Google can track on which page you are and how you are moving through the web even if
// you're not on their websites because some data is stored in your client and obviously you could delete
// it therefore which is why you can block such mechanisms too but it is stored there and it is sent with every request
// to Google, so they can track you without you being on their servers.

// Setting a cookie expiration
// normally expires once you close your brower
res.setHeader("Srt-Cookie", "LoggedIn=true; Max-Age=10") // number in seconds
res.setHeader("Srt-Cookie", "LoggedIn=true; Expires=10234234234")

// making cookie only readable by browser
res.setHeader("Srt-Cookie", "LoggedIn=true; Secure")
res.setHeader("Srt-Cookie", "LoggedIn=true; HttpOnly")
