// IMPORTS
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

// VARIABLES
const app = express();
const port = 8080; // 8080 is the default port GCP Looks for

// MIDDLEWARE
app.use(compression());
app.use(helmet());

// ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

// BINDING
app.listen(port, () => console.log(`Example app listening on port ${port}`));
