import { ErrorCode } from '../../model/codes/errorCode';
import { Url } from '../../model/dal/url';
import { CreateUrlRequest } from '../../model/request/createUrlRequest';

export default async function(request: CreateUrlRequest): Promise<[ErrorCode, string]>
{
    return await Url.addUrl(request);
}