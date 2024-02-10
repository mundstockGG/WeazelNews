// Import necessary modules
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname + '/src'));

// Read the JSON data file
const jsonData = fs.readFileSync('./data/articles.json', 'utf8');
const data = JSON.parse(jsonData);
const { logoUrl, articles } = data; // Assuming your JSON structure has a key named 'logoUrl'

// Define routes and middleware
// Example route
app.get('/', (req, res) => {
    // Pass the 'logoUrl' variable along with the 'articles' to the EJS template
    res.render('index', { logoUrl: logoUrl, articles: articles });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
