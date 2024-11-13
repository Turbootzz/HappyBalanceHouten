const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer route
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message} = req.body;

    // SMTP Settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.strato.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS 
        }
    });

    // Email configuratie
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: `Contactformulier: ${subject} van ${name}`,
        text: message,
        replyTo: email
    };

    // Send Email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email succesvol verzonden');
    } catch (error) {
        console.error(error);
        res.status(500).send('Er ging iets mis bij het verzenden van de email');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is gestart op poort ${PORT}`);
});
