const loginMiddleware = (req, res, next) => {
    if(req.body.username === "hello" && 
       req.body.password === "world") next();
    else res.send("Wrong username and password") 
}

module.exports = loginMiddleware