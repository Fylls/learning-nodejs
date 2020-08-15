// F.S. => File System
const fs = require("fs")
const message = "Hey!!"

//                              Synchronous

// You block the execution of the next line of code untill this code is executed
// if you are working with big file, it is not recommended

fs.readFileSync("messge.txt")

fs.writeFileSync("messge.txt", message)

//                              Asynchronous

// return a promise, and coming back when operation is done
// coming back and handling the callback, no blocking the code

fs.readFile("messge.txt", err => {
  // other code to execute
})

fs.writeFile("messge.txt", message, err => {
  // other code to execute
})

// err => {} is another event listener that will be called when we are done writing the file
