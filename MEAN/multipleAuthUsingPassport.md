# Multiple auth and optional auth in passport.js | MEAN

I learnt about optional auth using passport.js strategies.

+ Verifying user with cookie - 'local' strategy
+ Verifying user with access_token - 'bearer' strategy
+ Verify client with clientId/clientSecret combination using custom strategy

> Running all strategy check in express.js (main initialization of the app) and validation within middlewares where needed.


## Misc.
You can rename and infact use same strategy multiple times by assigning a name to it using code:

    passport.use('name_goes_here',new LocalStrategy({}))
    
    

### Ref

* [passport-custom] - https://www.npmjs.com/package/passport-custom
* [passReqToCallback] - http://stackoverflow.com/questions/11706533/passport-facebook-access-req-object-from-within-callback-function

[passport-custom]: <https://www.npmjs.com/package/passport-custom>
[passReqToCallback]: <http://stackoverflow.com/questions/11784233/using-passportjs-how-does-one-pass-additional-form-fields-to-the-local-authenti>
