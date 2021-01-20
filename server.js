const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/currency', require('./routes/api/currency'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));