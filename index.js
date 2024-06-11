require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN
};

app.get('/api/v1/me', cors(corsOptions), (req, res) => {
    res.send({
        address: process.env.ADDRESS,
        phone: process.env.PHONE_NUMBER,
        dateOfBirth: process.env.DATE_OF_BIRTH
    });
});

app.listen(process.env.PORT, () => console.log(`Ready at the port ${process.env.PORT}!`));