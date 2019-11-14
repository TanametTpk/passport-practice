const express = require("express");
const app = express();
// const jwtAuthCheck = require('./middlewares/logins/jwt')
// const loginMiddleware = require('./middlewares/logins/fixLogin')
// const localLogin = require('./middlewares/logins/localLogin')
const logins = require('./middlewares/logins')
const jwt = require('jsonwebtoken')
const SECRET = require('./configs/jwt').SECRET

app.use(express.json())

app.post("/login", logins.localLogin , (req, res) => {

    const payload = {
        sub: req.body.username,
        iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
     };

     res.json(jwt.sign(payload, SECRET));
});

app.get("/", logins.jwt , (req, res) => {
   res.send("ยอดเงินคงเหลือ 50");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});