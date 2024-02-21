// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/api/place-details', async (req:any, res:any) => {
  try {
    const apiKey = 'ChIJee2b7JRslFQRG4t2xupv60E';
    const placeId = 'AIzaSyBcv0QfUNUfBwo8pIGJ3teNCkaluSGUWus'; // Your provided place ID

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching place details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
