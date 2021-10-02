// Added triggers to increment the counter value
// whenever any new url insertion happens in the Urls collection

import Mongoose from 'mongoose';

const CounterSchema= new Mongoose.Schema(
{
counter:
    {
        type: Number,
    },
counterId:
    {
        type: Number,
    }
});

const CounterModel = Mongoose.model('Counters', CounterSchema);

export default CounterModel;