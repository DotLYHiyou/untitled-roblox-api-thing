function cgi() {
const noblox = require('noblox.js')
let key = undefined; // Replace undefined with your key in a string like so: "ROBLOSECURITYCOOKIE|..."
let id = undefined; // Replace undefined with your group user ID.
    const currentUser = noblox.setCookie(key) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)

    // Do everything else, calling functions and the like.
    const groupInfo = noblox.getGroup(id)
    console.log(groupInfo)
}
