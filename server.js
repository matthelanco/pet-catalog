const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// API Routes
app.use('/api/pets', require('./routes/pet-routes'));

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.listen(PORT, () => {
	console.log(`App is up and running. Listening on port ${PORT}`);
});

