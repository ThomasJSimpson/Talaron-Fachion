const express = require('express');
const thingsRoutes = require('./routes/things.routes');

const app = express();
app.use(express.json());

app.use('/api/things', thingsRoutes);

app.get('/', (_req, res) => res.status(200).json({ ok: true }));

// 404 générique
app.use((_req, res) => res.status(404).json({ error: 'Not Found' }));

module.exports = app;
