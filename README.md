# url-shortner
Shortens a given URL

Folder Structure
src
   |-- api
   |   |-- auth
   |   |   |-- getAuthUri.ts
   |   |   |-- routes.ts
   |   |   |-- signIn.ts
   |   |-- index.ts
   |   |-- shorten
   |   |   |-- createUrl.ts
   |   |   |-- redirect.ts
   |   |   |-- routes.ts
   |-- configs
   |   |-- configurations.ts
   |-- core
   |   |-- auth
   |   |   |-- processSignIn.ts
   |   |-- shorten
   |   |   |-- createUrl.ts
   |   |   |-- getUrl.ts
   |-- db
   |   |-- connect.ts
   |-- middlewares
   |   |-- authenticate.ts
   |-- model
   |   |-- codes
   |   |   |-- errorCode.ts
   |   |-- dal
   |   |   |-- schema
   |   |   |   |-- Url.ts
   |   |   |   |-- User.ts
   |   |   |-- url.ts
   |   |   |-- user.ts
   |   |-- request
   |   |   |-- createUrlRequest.ts
   |   |   |-- getTokensRequest.ts
   |   |   |-- signInRequest.ts
   |   |-- response
   |   |   |-- profileInfo.ts
   |   |   |-- signInResponse.ts
   |   |   |-- tokens.ts
   |   |-- types
   |   |   |-- constants.ts
   |   |   |-- errorCodes.ts
   |-- remoteCalls
   |   |-- call.ts
   |   |-- index.ts
   |-- server.ts

