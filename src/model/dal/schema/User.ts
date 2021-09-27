import Mongoose from 'mongoose';

const UserSchema= new Mongoose.Schema(
{
    userId:
    {
        type: String,
        required: true,
    },
    fullName:
    {
        type: String,
    },
    firstName:
    {
        type: String,
        required: true,
    },
    lastName:
    {
        type: String,
    },
    email:
    {
        type: String,
        match: /[a-z0–9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0–9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0–9](?:[a-z0–9-]*[a-z0–9])?\.)+[a-z0–9](?:[a-z0–9-]*[a-z0–9])?/,
        required: true,
        unique: true,
    },
    profilePicture:
    {
        type: String,
    }
});

const UserModel = Mongoose.model('Users', UserSchema);

export default UserModel;