import express from 'express';
import controller from '../controllers/bookings';

const router = express.Router();

router.post('/bookings', controller.createBooking);

export = router;