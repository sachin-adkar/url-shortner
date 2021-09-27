# url-shortner
Shortens a given URL

**Techs**
- Node.js
- MongoDB
- TypeScript
- Heroku

**Feature** 
- SignIn with google using OAuth2 flow
- Shortens a given URL
- Redirects to the shortened URL when navigated.

**Routes**

- POST /auth/getGoogleAuthUri : 
    Returns google Authorization URL which will allow the user to select email address. When user selects the email, google returns a auth code. 

- POST /auth/signIn
    Code generated from /getGoogleAuthUri has to be passed in the body. Using the code the backend will call google server for bearer token, using which we can access the user information (Email, username, googleId, and profile URL).
    
- POST /short
    Any URL can be passed in the body. Backend will generate a new URL and send in the response
   
- GET /<id>
    This route will be take care of the redirection to the original URL 

**Link for API doc**: https://app.swaggerhub.com/apis-docs/Personal1681/Shortner-1.1/1.0.0

