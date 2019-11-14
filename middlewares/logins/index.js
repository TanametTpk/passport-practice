var passport = require('passport')

const strategies = require('require-all')({
    dirname     :  __dirname + '/strategies',
    recursive   : true
})

let authStrategies = {}

Object.keys(strategies).map((key) => {
    
    let strategy = strategies[key]

    passport.use(strategy.model)

})

passport.initialize()

Object.keys(strategies).map((key) => {
    
    let strategy = strategies[key]

    authStrategies = {
        ...authStrategies,
        [key]: passport.authenticate(strategy.setting.name, strategy.setting.options)
    }
})

module.exports = authStrategies
