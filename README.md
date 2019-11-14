# passport strategy

## how it's work
- config strategy
- put strategy to passport
- call passport.initialize() if you have session
- call passport.authenticate(<name of strategy>, <options>) as middleware

## opinions
I think passport is very easy way to build login system. 
but if I have to make server-client login, I would like to build my own middleware for local login.
Because I can process request after check at once and reuse it, otherwise with passport I'll have 2 middleware to do that.

In conclutions, I highly recommended to use passport if system is ssr.