require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Endpoint sederhana
app.get('/', async (req, res) => {
    res.send('Aplikasi CRUD dengan PostgreSQL berjalan di Heroku!');
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});

