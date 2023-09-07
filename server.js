const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure static middleware
// to serve from the production 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});