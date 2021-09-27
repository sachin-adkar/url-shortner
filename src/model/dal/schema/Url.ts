import Mongoose from 'mongoose';

const UrlSchema= new Mongoose.Schema(
{
url:
    {
        type:String,
    },
userId:
    {
        type: String,
    }
});

const UrlModel = Mongoose.model('Urls', UrlSchema);

export default UrlModel;