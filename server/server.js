const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../client')));

// Route for serving the index.html file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
