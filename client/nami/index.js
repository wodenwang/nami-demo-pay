var login = require('./lib/login.js')
var http = require('./lib/http.js')

module.exports = {
    login: login.login,
    checkLogin: login.checkLogin,
    getUserInfo: login.getUserInfo,
    request: http.request
}