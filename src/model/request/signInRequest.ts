import { ErrorCodes } from '../types/errorCodes';

export default class SignInRequest
{
    public readonly authCode: string;

    constructor(authCode: string)
    {
        if (!authCode)
        {
            throw ErrorCodes.InvalidAuthCode.description;
        }

        this.authCode = authCode;
    }

}