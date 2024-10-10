const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const secretKey = 'Test@123';

app.use(cors());
app.use(bodyParser.json());

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        console.log(username+","+password)
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        console.log(token);
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

// Dashboard Route
app.get('/dashboard', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log(token);
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
        return res.json({ message: `Hello ${decoded.username}` });
    });
});

app.listen(4000, () => {
    console.log('Auth server running on port 4000');
});
