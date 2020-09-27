import express from 'express';
import mongoose from 'mongoose';

import Data from './data.js';
import Videos from './dbModel.js';

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*'),
        res.setHeaders('Access-Control-Allow-Headers', '*'),
        next();
})

// DB config
mongoose.connect("mongodb+srv://admin:CzmcH8iyoCFH04g9@cluster0.od9dr.mongodb.net/tiktok-clone?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// api endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    // add DATA to the database 
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));