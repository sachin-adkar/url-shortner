import { Request, Response } from 'express';
import SignInRequest from '../../model/request/signInRequest';
import SignInResponse from '../../model/response/signInResponse';
import { processSignIn } from '../../core/auth/processSignIn';
import { ErrorCode } from '../../model/codes/errorCode';
import { ErrorCodes } from '../../model/types/errorCodes';

export const signIn = async(req: Request, res: Response) =>
{
    try
    {
        const body: any = req.body;
        const signInRequest = new SignInRequest(body.code);

        const signInResponse: [ErrorCode, SignInResponse] =
            await processSignIn(signInRequest);

        if (signInResponse[0] === ErrorCodes.OK)
        {
            res.status(200).json(signInResponse[1]);
        }
        else
        {
            res.status(400).json(signInResponse[0]);
        }

    }
    catch (error)
    {
        res.status(400).json(ErrorCodes.Unknown);
    }

}
