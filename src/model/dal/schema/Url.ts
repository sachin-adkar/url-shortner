import Mongoose from 'mongoose';

const UrlSchema= new Mongoose.Schema(
{
    longUrl:
        {
            type:String,
        },
    userId:
        {
            type: String,
        },
    shortUrlId:
        {
            type: String,
            unique: true,
        }
});

const UrlModel = Mongoose.model('Urls', UrlSchema);

export default UrlModel;