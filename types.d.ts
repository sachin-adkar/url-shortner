declare namespace Express {
    export interface Request {
      user: any
    }
  };

  declare module 'express';
  declare module 'cors';