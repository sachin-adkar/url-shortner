import { ErrorCode } from '../../model/codes/errorCode';
import { Url } from '../../model/dal/url'
import { ErrorCodes } from '../../model/types/errorCodes';

export default async function(id: string)
    :Promise<[ErrorCode, string]>
{
    const originalUrl = await Url.getLongUrl(id);

    if (originalUrl)
    {
        return [ErrorCodes.OK, originalUrl];
    }
    else
    {
        return [ErrorCodes.FailedToNavigate, ''];
    }
}