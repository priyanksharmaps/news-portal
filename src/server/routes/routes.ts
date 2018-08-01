import { Router, Request, Response } from 'express';
import { CLIENT_ROOT } from '../common/constants';

const router: Router = Router();

router.get('/', (req: Request, resp: Response) => {
    console.log('${CLIENT_ROOT}/index.html');
    resp.sendFile(`${CLIENT_ROOT}/index.html`);
});

export const ClientRouter: Router = router;