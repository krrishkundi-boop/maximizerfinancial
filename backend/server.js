const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/contact', (req, res) => {
    const { name, email, service, message } = req.body;
    
    console.log('--- New Contact Inquiry ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Service:', service);
    console.log('Message:', message);
    console.log('---------------------------');
    
    // Here you would typically save to a database or send an email
    
    res.status(200).json({ 
        success: true, 
        message: 'Inquiry received successfully! Our team will contact you soon.' 
    });
});

app.get('/', (req, res) => {
    res.send('Maximizer Financial Services API is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
