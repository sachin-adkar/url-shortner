import express from 'express';
import { config } from './configs/configurations';
import connect from './db/connect';
import './api/auth/getAuthUri';
import routes from './api';
import cors from 'cors';
const app = express();

app.use(cors());

app.use(express.json());

// Check if configs are loaded
if (!config.dbUri || !config.rootUrl)
{
  console.log('Configs are not loaded');
  process.exit(1);
}

routes(app);

app.listen(config.port, () =>
{
    console.log(`Server is up and running on ${config.port}`);
    connect();
});
