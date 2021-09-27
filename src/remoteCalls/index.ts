/**
 * Remote calls will be invoked from here with necessary data
 */

import queryString from 'query-string';
import { config } from '../configs/configurations';
import { ErrorCode } from '../model/codes/errorCode';
import GetTokensRequest from '../model/request/getTokensRequest';
import { ProfileInfo } from '../model/response/profileInfo';
import { Tokens } from '../model/response/tokens';
import { ErrorCodes } from '../model/types/errorCodes';
import { get, post } from './call';

export class RemoteCalls
{
    static async getTokens(
        request: GetTokensRequest)
        : Promise<[ErrorCode, Tokens]>
    {
        const qs = queryString.stringify(request);

        const response = await post(config.tokenUrl as string, qs);

        if (response[0] === ErrorCodes.OK &&
            response[1]?.status === 200 &&
            response[1].data?.access_token &&
            response[1].data?.id_token
            )
        {
            return [ErrorCodes.OK,
                {
                    accessToken: response[1].data.access_token,
                    idToken: response[1].data.id_token,
                }];
        }
        else
        {
            console.log(response[0]);
            return [ErrorCodes.FailedAuthorization, null];
        }
    }

    static async getProfile(
        request: Tokens
    ): Promise<[ErrorCode, ProfileInfo]>
    {
        const qs = queryString.stringify(
            {
                access_token: request.accessToken,
                alt: 'json'
            });

        const url = config.profileUrl + qs;

        const headers =
        {
            Authorization : request.idToken,
        }

        const response = await get(url, headers);

        if (response[0] === ErrorCodes.OK &&
            response[1].status === 200 &&
            response[1].data)
        {
            return [ErrorCodes.OK,
                {
                    fullName: response[1].data.name,
                    firstName: response[1].data.given_name,
                    lastName: response[1].data.family_name,
                    email: response[1].data.email,
                    userId: response[1].data.id,
                    profilePicture: response[1].data.picture,
                }];
        }
        else
        {
            console.log(response)
            return [ErrorCodes.FailedAuthorization, undefined];
        }
    }


}