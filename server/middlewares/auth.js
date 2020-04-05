const passport = require("passport");
const Strategy = require("passport-http-bearer").Strategy;
const db = require(global.appRoot + "/db");

passport.use(new Strategy(
    function (token, cb) {
        db.findByToken(token, function (err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            return cb(null, user);
        });
    })
);

module.exports = passport;