import jwt from 'jsonwebtoken';
import { config } from '../../configs/configurations';
import { ErrorCode } from '../../model/codes/errorCode';
import User from '../../model/dal/user';
import GetTokensRequest from '../../model/request/getTokensRequest';
import SignInRequest from '../../model/request/signInRequest';
import { ProfileInfo } from '../../model/response/profileInfo';
import SignInResponse from '../../model/response/signInResponse';
import { Tokens } from '../../model/response/tokens';
import { AuthConstants } from '../../model/types/constants';
import { ErrorCodes } from '../../model/types/errorCodes';
import { RemoteCalls } from '../../remoteCalls';

export

/**
 * @param {SignInRequest} request
 * @return {*}  {Promise<[ErrorCode, SignInResponse]>}
 */

const processSignIn = async(request: SignInRequest)
    : Promise<[ErrorCode, SignInResponse]> =>
{
    try
    {
        const code = request.authCode;

        const getTokensRequest: GetTokensRequest =
        {
            code,
            client_id: config.clientId,
            client_secret: config.clientSeret,
            redirect_uri: config.redirectUrl,
            grant_type: AuthConstants.GRANT_TYPE,
        };

        // Fetch tokens in order to fetch user information from google
        const tokens: [ErrorCode, Tokens] =
            await RemoteCalls.getTokens(getTokensRequest);

        if (tokens[0] !== ErrorCodes.OK)
        {
            return [tokens[0], undefined];
        }

        // Fetch user info
        const profile: [ErrorCode, ProfileInfo] =
            await RemoteCalls.getProfile(tokens[1]);

        if (profile[0] !== ErrorCodes.OK)
        {
            return [profile[0], undefined];
        }

        const user = await User.findUser(profile[1].userId);

        if (!user.userId)
        {
            // Save the user info in database
            const addUser = await User.addUser(profile[1]);

            if (addUser !== ErrorCodes.OK)
            {
                return [addUser, undefined];
            }
        }

        const userObj =
        {
            firstName: profile[1].firstName,
            userId:profile[1].userId,
            email:profile[1].email,
        };

        // Generate access token and refresh token using jsonwebtoken
        const accessToken = jwt.sign(userObj, config.accessTokenSecret);

        const refreshToken = jwt.sign(userObj, config.refreshTokenSecret);

        return [ErrorCodes.OK,
            {
                accessToken,
                refreshToken,
                userName: profile[1].firstName,
                profileUrl: profile[1].profilePicture,
            }];

    }
    catch (error)
    {
        console.log('Error in ProcessSignIn', error);
        return [ErrorCodes.FailedAuthorization, undefined];
    }

};
