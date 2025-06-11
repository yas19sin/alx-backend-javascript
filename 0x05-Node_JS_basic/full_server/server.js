import express from 'express';
import router from './routes/index.js';

/**
 * Express server using all routes and controllers
 */
const app = express();

// Use the routes
app.use('/', router);

// Start the server
app.listen(1245, () => {
    console.log('Server running at port 1245');
});

export default app;
