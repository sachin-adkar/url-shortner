import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { config } from '../configs/configurations';

export default function(req:Request, res: Response, next: NextFunction)
{
    const token: string = req.headers['x-access-token'] as string;

    if (token === 'null' || !token)
    {
        return res.status(403).send('Forbidden');
    }

    try
    {
        const decoded = jwt.verify(token, config.accessTokenSecret);
        console.log(decoded);
        req.user = decoded;
    }
    catch (error)
    {
        return res.status(401).send('Authentication failed');
    }

    return next();

}