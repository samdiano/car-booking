import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.post('/login', controller.signIn);

export = router;