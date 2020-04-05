const host = '0.0.0.0'
const port = process.env.PORT || 3000
const token = "testtokenfordevmode"

// mysql config
const mysql_config = {
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7'
}




module.exports = {
    mysql_config,
    token,
    host,
    port
}