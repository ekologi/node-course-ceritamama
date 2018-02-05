const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys'); 


module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    },
        (accessToken, refreshToken, profile, done) => {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
            console.log(accessToken);
            console.log(profile);
        }
    ));
}