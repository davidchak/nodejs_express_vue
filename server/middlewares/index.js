const users = require("../db/users");
const token = require("../config").token;
var jwt = require('express-jwt');

const logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
}

const auth = (err, req, res, next) => {
    if (req.header.authorization){

    }
}



module.exports = {
    logErrors
}