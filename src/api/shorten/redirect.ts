import { Request, Response } from 'express';
import getUrl from '../../core/shorten/getUrl';
import { ErrorCode } from '../../model/codes/errorCode';
import { ErrorCodes } from '../../model/types/errorCodes';

export default async function(req: Request, res: Response)
{
    const originalUrl: [ErrorCode, string] = await getUrl(req.params.id);

    if (originalUrl[0] === ErrorCodes.OK && originalUrl[1])
    {
        res.redirect(originalUrl[1]);
    }
    else
    {
        res.send(originalUrl[0]);
    }
}
