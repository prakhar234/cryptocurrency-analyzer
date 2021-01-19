const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>  res.send('API Running'));

// Define Routes
app.use('/api/currency', require('./routes/api/currency'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));