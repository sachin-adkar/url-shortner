import { config } from '../../configs/configurations';
import { ErrorCode } from '../codes/errorCode';
import { CreateUrlRequest } from '../request/createUrlRequest';
import { ErrorCodes } from '../types/errorCodes';
import UrlModel from './schema/Url';

export class Url
{
    static async getUrl(id: string)
    {
        try
        {
            const urlInfo: any = await UrlModel.findById(id).exec();

            if (urlInfo)
            {
                return urlInfo.url as string;
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

    static async addUrl(urlData: CreateUrlRequest)
        : Promise<[ErrorCode, string]>
    {
        try
        {
            const url = new UrlModel(urlData);

            const response = await url.save();

            if (response)
            {
                const shortUrl = config.serverUrl + response._id;
                return [ ErrorCodes.OK, shortUrl];
            }
            else
            {
                return [ ErrorCodes.FailedToCreateUrl, '' ];
            }
        }
        catch (error)
        {
            return [ ErrorCodes.FailedToCreateUrl, ''];
        }
    }
}