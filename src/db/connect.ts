import mongoose from 'mongoose';
import { config } from '../configs/configurations';

export default function()
{
    const dbUri = config.dbUri as string;

    return mongoose
    .connect(dbUri)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) =>
    {
        console.log('error', error);
        process.exit(1);
    });
}
