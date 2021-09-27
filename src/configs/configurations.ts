import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port : process.env.PORT || 3000,
    dbUri: process.env.DB_URL,

    // Google related
    rootUrl: process.env.GOOGLE_ROOT_URL,
    clientId: process.env.CLIENT_ID,
    clientSeret: process.env.CLIENT_SECRET,
    scope: [process.env.USER_PROFILE_INFO_URL,
        process.env.USER_EMAIL_INFO_URL].join(' '),
    tokenUrl: process.env.TOKEN_URL,
    profileUrl: process.env.PROFILE_URL,
    redirectUrl: process.env.REDIRECT_URL,
    homePage: process.env.HOME_PAGE,

    // Secrets
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,

    serverUrl: process.env.SERVER_URL,

}
