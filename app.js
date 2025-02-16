const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/vendors', express.static(path.join(__dirname, 'vendors')));

// Debugging: Log file requests
app.use('/assets', (req, res, next) => {
    console.log(`File requested: ${req.path}`);
    next();
});

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
