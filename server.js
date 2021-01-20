const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/currency', require('./routes/api/currency'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));