import { Request, Response } from 'express';
import createUrl from '../../core/shorten/createUrl';
import { ErrorCode } from '../../model/codes/errorCode';
import { CreateUrlRequest } from '../../model/request/createUrlRequest';
import { ErrorCodes } from '../../model/types/errorCodes';

export default async function(req: Request, res: Response)
{
    try
    {
        const createUrlRequest =
            new CreateUrlRequest(req.body.url, req.user.userId);

        const createUrlResponse: [ErrorCode, string] =
            await createUrl(createUrlRequest);

        if (createUrlResponse[0] === ErrorCodes.OK)
        {
            res.status(200).json(createUrlResponse);
        }
        else
        {
            res.status(400).json(createUrlResponse[0]);
        }
    }
    catch (error)
    {
        console.log('Error in createUrl API', error);

        res.status(500).json(ErrorCodes.FailedToCreateUrl);
    }
};
