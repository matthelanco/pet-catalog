const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Import Path
const path = require('path');

// Static files
app.use(express.static('build'));

// API Routes
app.use('/api/pets', require('./routes/pet-routes'));


app.listen(PORT, () => {
	console.log(`App is up and running. Listening on port ${PORT}`);
});

