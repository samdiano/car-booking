import express from 'express';
import controller from '../controllers/cars';

const router = express.Router();

router.get('/cars', controller.getCars);

export = router;