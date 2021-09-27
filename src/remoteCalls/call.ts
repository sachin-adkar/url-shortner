import axios from 'axios';
import { ErrorCode } from '../model/codes/errorCode';
import { ErrorCodes } from '../model/types/errorCodes';

export const post = async(url: string, values: string)
    : Promise<[ErrorCode, any]> =>
{
    try
    {
        const response = await axios.post(url, values);
        if (response)
        {
            return [ErrorCodes.OK, response];
        }
        else
        {
            return [ErrorCodes.InvalidResponse, undefined]
        }
    }
    catch (error)
    {
        console.log('Error In RemoteCall(POST)', error);
        return [ErrorCodes.InvalidResponse, undefined];
    }
};

export const get = async(url: string, headers: any)
    : Promise<[ErrorCode, any]>  =>
{
    try
    {
        const response = await axios.get(
            url,
            headers
        );

        if (response)
        {
            return [ErrorCodes.OK, response];
        }
        else
        {
            return [ErrorCodes.InvalidResponse, undefined];
        }
    }
    catch (error)
    {
        console.log('Error In RemoteCall(GET)', error);
        return [ErrorCodes.InvalidResponse, undefined];
    }

};