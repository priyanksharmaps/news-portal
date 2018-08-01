import * as express from 'express';

import { WelcomeController } from './controllers';

const app: express.Application = express();

const port = process.env.port || 3000;

app.use('/Welcome', WelcomeController);

app.listen(port, ()=> {
    console.log(`Listening at http://localhost:${port}/`);
})