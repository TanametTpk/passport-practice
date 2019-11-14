const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    (username, password, done) => {
        
        if(username === "hello" && password === "world") done(null, {username , password})
        else done(null, false, { message: 'Incorrect username or password' })
    }
)

module.exports = {
    model: strategy,
    setting: {
        name: "local",
        options: {session:false}
    }
}