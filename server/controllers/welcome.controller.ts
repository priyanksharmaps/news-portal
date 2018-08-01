import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, resp: Response) => {
    resp.send('hello world');
});

export const WelcomeController : Router = router;