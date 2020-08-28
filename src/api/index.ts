import { Router } from 'express';
import status from './status';

const router = Router();

router.use(status);

export default router;