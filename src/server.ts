import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import userRoutes from './routes/user';
import carRoutes from './routes/car';
import bookingRoutes from './routes/bookings';
import validateToken from './middlewares/validateToken';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const NAMESPACE = 'Server';
const router = express();


const apiDoc = YAML.load(`${process.cwd()}/swagger.yaml`);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDoc));


/** Log the request */
router.use((req, res, next) => {
    logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`, NAMESPACE);

    next();
});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

router.use('/api/v1/auth', userRoutes);
router.use('/api/v1/', validateToken, carRoutes);
router.use('/api/v1/', validateToken, bookingRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));

export default router;
