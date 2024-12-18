// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// API endpoint ví dụ
app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Minh Uy' }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
