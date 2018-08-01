import * as express from 'express';
import * as path from 'path';
import { PUBLIC_ROOT, ADMIN_ROOT, CLIENT_ROOT } from './common/constants';
import { serveStatic } from 'serve-static';

const app: express.Application = express();

const port = process.env.port || 3000;


app.use('/client', express.static(CLIENT_ROOT));
app.use('/admin', express.static(ADMIN_ROOT));

app.listen(port, ()=> {
    console.log(`Listening at http://localhost:${port}/`);
})