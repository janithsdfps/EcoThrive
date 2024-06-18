const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
 

const app = express(); 
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable express json parser

// get Supabase URL and key from .env file
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const Backend_API_KEY = process.env.BACKEND_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
// get GeminiAPI key from .env file




// Middleware to check API key
const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];

    if (apiKey && apiKey === Backend_API_KEY) {
        next(); // API key is valid, continue with the request
    } else {
        res.status(401).json({ error: 'Unauthorized. Invalid API key.' });
    }
};
// endpoint to check if the server is running
app.get('/', (req, res) => {
    res.send('Hello, this is ecoth backend!');
});

// Use the middleware for all API endpoints
app.use('/api', checkApiKey);

// Endpoint to insert data into the suggestion table
app.post('/submit', async (req, res) => {
    try {
        const { type, location, gardenType, purpose, preference, schedule, time } = req.body;

        const { data, error } = await supabase
            .from('suggestion')
            .insert([
                { type, location, gardenType, purpose, preference, schedule, time }
            ]);

        if (error) {
            throw error;
        }

        res.status(201).json(data);
    } catch (error) {
        console.error('Error inserting suggestion:', error);
        res.status(500).send('Internal Server Error');
    }
});


// endpoint to fetch data from the database
app.get('/suggestion', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('suggestion')
            .select('*')
            console.log('selct all ')
        if (error) {
            throw error;
        }
        res.status(200).json(data);

    } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).send('Internal Server Error');
    }
});

// endpoint to delete a location by ID
app.delete('/api/delete-locations/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { data, error } = await supabase
            .from('locations')
            .delete()
            .eq('id', id);

        if (error) {
            throw error;
        }

        res.status(200).json({ message: 'Location deleted successfully!', data });
    } catch (error) {
        console.error('Error deleting location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// listen on port 3000 or server port
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on localhost port ${PORT}`);
});

exports.app = app;