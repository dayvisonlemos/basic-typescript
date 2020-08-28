import { Router } from 'express';
import controller from './ping.controller';

const router = Router({ mergeParams: true });

router.get('/ping', controller.ping);

export default router;