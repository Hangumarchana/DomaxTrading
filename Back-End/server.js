const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



app.post('/send', async (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: `${subject} (from ${firstName} ${lastName})`,
        text: `Dear Sir/Madam,

        My name is ${firstName} ${lastName}, and I am writing to inquire about ${subject}.
        
        My question is as follows: ${message}
        
        I would be grateful if you could respond to my query at your earliest convenience via email at ${email}.
        
        Thank you for your time and assistance.
        
        Sincerely,  
        ${firstName} ${lastName}`

    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on http://0.0.0.0:${PORT}`);
});
