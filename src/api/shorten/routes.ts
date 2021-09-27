import express from 'express';
import authenticate from '../../middlewares/authenticate';
import createShortUrl from './createUrl';
import redirect from './redirect';

const   router = express.Router();

router.post('/short', authenticate, createShortUrl);

router.get('/:id', redirect);

export { router };
