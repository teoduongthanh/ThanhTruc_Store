const UserRouter = require('./UsersRouter')

const routes = (app) => {
    app.get('/api/user', UserRouter)
}

module.exports = routes;