import { UrlConstants } from '../../model/types/constants';
import { config } from '../../configs/configurations';
import { ErrorCode } from '../../model/codes/errorCode';
import { Counter } from '../../model/dal/counter';
import { Url } from '../../model/dal/url';
import { CreateUrlRequest } from '../../model/request/createUrlRequest';
import { ErrorCodes } from '../../model/types/errorCodes';

export default async function(request: CreateUrlRequest): Promise<[ErrorCode, string]>
{
    const url = await Url.getShortUrl(request.url);

    if (url)
    {
        return [ErrorCodes.OK, config.serverUrl + url];
    }

    const getCounter = await Counter.getCounter();

    if (getCounter[0] !== ErrorCodes.OK)
    {
        return [getCounter[0], undefined];
    }

    const shortUrlId = await encode(getCounter[1]);

    const saveUrl = await Url.addUrl(request.url, shortUrlId, request.userId);

    if (saveUrl !== ErrorCodes.OK)
    {
        return [saveUrl, undefined];
    }

    return [ErrorCodes.OK, config.serverUrl + shortUrlId];
}

const encode = async(counter: number) =>
{
    // To reduce the probability of collision,
    // generate a random number and attach to the counter
    // Multiplying random number with 36^3 (46656) just to have enough bits
    // tslint:disable-next-line:no-bitwise
    const randomNumber = (Math.random() * 46656 | 0).toString();
    let _counter = Number(counter + randomNumber);
    const base = UrlConstants.CHARACTERS.length;
    const short = [];

    // Size of the shortUrlId will depend on the size of the _counter
    // Assume _counter >= 100,000,000 size of the shortUrlid will be 5
    // it all depends upon how many times _counter is devided by base
    // larger the _counter larger the size of the shortUrlId
    while (_counter > 0)
    {
        const index = _counter % base;
        short.push(UrlConstants.CHARACTERS.charAt(index));
        _counter = Math.floor(_counter / base);
    }

    return short.join('');
}