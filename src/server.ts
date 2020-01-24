// IMPORTS
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

// VARIABLES
const app = express();
const port = process.env.PORT || 8080; // When using flexible environments, keep in mind GCP will look for your server in ports 8080-8084

// MIDDLEWARE
app.use(compression());
app.use(helmet());

// ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

// BINDING
app.listen(port, () => console.log(`Example app listening on port ${port}`));
