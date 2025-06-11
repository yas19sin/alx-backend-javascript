import express from 'express';
import router from './routes/index';

/**
 * Express server using all routes and controllers
 */
const app = express();

// Use the routes
app.use('/', router);

// Start the server
app.listen(1245);

export default app;
