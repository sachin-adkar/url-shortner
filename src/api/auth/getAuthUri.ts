import { Request, Response } from 'express';
import querString from 'query-string';
import { config } from '../../configs/configurations';
import { AuthConstants } from '../../model/types/constants';
import { ErrorCodes } from '../../model/types/errorCodes';

export const getAuthUri = async(req: Request, res: Response) =>
{
    try
    {
        const authUrlOptions =
        {
            access_type: AuthConstants.ACCESS_TYPE,
            client_id: config.clientId,
            response_type: AuthConstants.RESPONSE_TYPE,
            redirect_uri: config.redirectUrl,
            scope: config.scope,
        }

        const authUrl = `${config.rootUrl}?${querString.stringify(authUrlOptions)}`;

        res.status(200).json(
        {
            authUrl
        });
    }
    catch (error)
    {
        res.status(400).json(ErrorCodes.Unknown);
    }

}
