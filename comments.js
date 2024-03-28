// Import necessary modules
const express = require('express');

// Create web server
const app = express();
const port = 3000; // Port number to listen on

// Middleware to parse JSON bodies
app.use(express.json());

// Array to store comments
let comments = [];

// Define routes and controllers

// GET request to fetch all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST request to add a new comment
app.post('/comments', (req, res) => {
    const { author, content } = req.body;
    if (!author || !content) {
        return res.status(400).json({ message: "Author and content are required" });
    }

    const newComment = {
        id: comments.length + 1,
        author,
        content
    };

    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
