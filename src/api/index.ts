import { Express } from 'express';
import { router as AuthRouter } from './auth/routes';
import { router as ShortnerRouter } from './shorten/routes';

export default function(app: Express)
{
    app.use('/s', ShortnerRouter);
    app.use('/auth', AuthRouter);
}