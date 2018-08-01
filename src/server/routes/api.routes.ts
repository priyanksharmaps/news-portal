import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, resp: Response) => {
    console.log('in api route');
});

export const ApiRoutes: Router = router;