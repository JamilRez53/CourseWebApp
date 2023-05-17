const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
CLIENT_ID = "474041029812-5arhds5bfc082e91c80v3vdhdq59so6v.apps.googleusercontent.com"
CLIENT_SECRET="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"
passport.use(
	new GoogleStrategy(
		{
			clientID: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			callbackURL: "http://localhost:5000/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});