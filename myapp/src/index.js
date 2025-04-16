const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

console.log('Request received via Docker!');
// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! From Docker!');
});
app.get('/user', (req, res) => {
    
    res.send({
        name: 'John Doe',
        age: 30,
        email: 'rafiq@gmail.com',
        phone: '1234567890',
    });
});

// Start the server
app.listen(port, () => {
    console.log('Database URL:', process.env.DATABASE_URL);
    console.log(`Server is running on http://localhost:${port}`);
});