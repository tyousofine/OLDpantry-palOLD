import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalleRoutes.js';
import davinciRoutes from './routes/davinciRoutes.js';
// import tastyRoutes from './routes/tastyRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/davinci', davinciRoutes);
// app.use('/api/v1/tasty', tastyRoutes);


app.get('/', async (req, res) => {
    res.send('Hello from AI!');
})

const startServer = async () => {
    app.listen(8080, () => console.log("Server has started on localhost port 8080"));
}

startServer();


