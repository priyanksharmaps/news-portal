import * as express from 'express';
import * as path from 'path';
import { ADMIN_ROOT, CLIENT_ROOT } from './common/constants';
import { ApiRoutes } from './routes/api.routes';

const app: express.Application = express();

const port = process.env.port || 3000;


app.use('/client', express.static(CLIENT_ROOT));
app.use('/admin', express.static(ADMIN_ROOT));
app.use('/api', ApiRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})