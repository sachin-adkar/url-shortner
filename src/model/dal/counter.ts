import CounterModel from './schema/Counter';
import { ErrorCodes } from '../types/errorCodes';
import { ErrorCode } from '../codes/errorCode';

export class Counter
{
    public static async getCounter()
    : Promise<[ErrorCode, number]>
    {
        try
        {
            const response: any = await CounterModel.findOne(
                {
                    counterId: 1,
                },
                {
                    counter: 1,
                }
            ).exec();

            if(response?.counter)
            {
                return [ErrorCodes.OK, response.counter];
            }
            else
            {
                return [ErrorCodes.FailedToFetchUrlUniqueId, undefined];
            }

        }
        catch (error)
        {
            console.log('Failed to fetch the counter from database', error);
            return [ErrorCodes.FailedToFetchUrlUniqueId, undefined];
        }
    }
}
