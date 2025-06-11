import express from 'express';
import router from './routes/index';

/**
 * Express server using all routes and controllers
 */
const app = express();

// Use the routes
app.use('/', router);

// Start the server
const port = 1245;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default app;
