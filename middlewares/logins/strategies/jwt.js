const config = require('../../../configs/jwt')
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.SECRET,
}

const strategy = new JwtStrategy(jwtOptions, (payload, done) => {
    if(payload.sub === "hello" ) done(null, true);
    else done(null, false);
});

module.exports = {
    model: strategy,
    setting: {
        name: "jwt",
        options: {session:false}
    }
}