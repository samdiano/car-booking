import express from 'express';
import controller from '../controllers/bookings';

const router = express.Router();

router.post('/bookings', controller.createBooking);
router.get('/bookings', controller.getBookings);

export = router;