const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/db/database');
const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');


/** Initializing Express Framework */
const app = express();

/** Connect Database */
connectDB();

const PORT = 5000;

/** Middleware */
app.use(bodyParser.json());

/** Routes */
app.get('/', (req, res) => {
    res.send('WELCOME TO MICRO AUTH BACKEND');
});

app.use(userRouter);
app.use(postRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});