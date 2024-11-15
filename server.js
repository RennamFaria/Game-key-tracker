const express = require('express');
const axios = require('axios');
const helmet = require('helmet');  // Import helmet for security headers
const cors = require('cors');  // Optional: Import CORS package for enabling cross-origin requests

const app = express();
const PORT = 3000;

// Use helmet for security headers (including CSP)
app.use(helmet());

// Allow cross-origin requests (CORS) for all routes
app.use(cors());

// Serve static files (like favicon) from the 'public' folder
app.use(express.static('public'));

// Proxy route
app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get('https://gamerpower.com/api/');
        res.json(response.data); // Forward the API response to the client
    } catch (error) {
        console.error('Error fetching data from the API:', error.message);
        res.status(500).send('Error fetching data from the API');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
