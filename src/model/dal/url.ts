import { config } from '../../configs/configurations';
import { ErrorCode } from '../codes/errorCode';
import { CreateUrlRequest } from '../request/createUrlRequest';
import { ErrorCodes } from '../types/errorCodes';
import UrlModel from './schema/Url';

export class Url
{
    static async getShortUrl(longUrl: string)
    {
        try
        {
            const urlInfo: any = await UrlModel.findOne(
                {
                    longUrl,
                }
                ).exec();

            if (urlInfo)
            {
                return urlInfo.shortUrlId as string;
            }
            else
            {
                return '';
            }
        }
        catch (error)
        {
            console.log(error);
            return '';
        }
    }

    static async getLongUrl(shortUrlId: string)
    {
        try
        {
            const urlInfo: any = await UrlModel.findOne(
                {
                    shortUrlId,
                }
                ).exec();

            if (urlInfo)
            {
                return urlInfo.longUrl as string;
            }
            else
            {
                return '';
            }
        }
        catch (error)
        {
            console.log(error);
            return '';
        }
    }

    static async addUrl(longUrl: string, shortUrlId: string, userId: string)
        : Promise<ErrorCode>
    {
        try
        {
            const url = new UrlModel(
                {
                    longUrl,
                    shortUrlId,
                    userId,
                }
            );

            const response = await url.save();

            if (response)
            {
                return ErrorCodes.OK;
            }
            else
            {
                return ErrorCodes.FailedToCreateUrl;
            }
        }
        catch (error)
        {
            console.log('Error occured while storing the URL', error);

            return ErrorCodes.FailedToCreateUrl;
        }
    }
}