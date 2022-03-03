const mailRouter = require('./mailRouter')


function routerApi(app) {
    app.use('/mail', mailRouter)
}

module.exports = routerApi