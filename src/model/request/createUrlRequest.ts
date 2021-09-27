import { ErrorCodes } from '../types/errorCodes';

export class CreateUrlRequest
{
    public readonly url: string;
    public readonly userId: string;

    constructor (
        url: string,
        userId: string)
    {
        if (!url)
        {
            throw ErrorCodes.EnterUrl;
        }

        const regEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

        if (!regEx.test(url.toLowerCase()))
        {
            throw ErrorCodes.InvalidUrl;
        }

        this.userId = userId;
        this.url = url;
    }
}