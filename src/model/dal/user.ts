import { ProfileInfo } from '../response/profileInfo';
import UserModel from './schema/User';
import { ErrorCodes } from '../types/errorCodes';

export default class User
{
    static async findUser(userId: string)
        :Promise<any>
    {
        const userInfo = await UserModel.findOne
        ({
            userId,
        }
        ).exec();

        console.log(userInfo);

        if (userInfo)
        {
            return userInfo;
        }
        else
        {
            return undefined;
        }
    }

    static async findById(id: string)
    {
        const userInfo = await UserModel.findById(id).exec();

        if (userInfo)
        {
            return userInfo;
        }
        else
        {
            return undefined;
        }
    }

    static async addUser(profileInfo: ProfileInfo)
    {
        try
        {
            const user = new UserModel(profileInfo);

            const response = await user.save();

            if (response)
            {
                return ErrorCodes.OK;
            }
            else
            {
                return ErrorCodes.FailedToSaveUser;
            }
        }
        catch (error)
        {
            return ErrorCodes.FailedToSaveUser;
        }
    }

}