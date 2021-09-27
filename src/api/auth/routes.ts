import express, { Express, Request, Response } from 'express';
import { getAuthUri } from './getAuthUri';
import { signIn } from './signIn';

const   router = express.Router();

router.get('/getGoogleAuthUri', getAuthUri);
router.post('/signin', signIn);

export { router };
