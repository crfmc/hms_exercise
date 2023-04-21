const express = require('express');
const path = require('path');

// Environment variables
// require('dotenv').config({ path: "./.env-local"});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})


app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
});