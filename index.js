const express = require('express');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

// HEADER ROUTES ===============

app.use('/api/header/movie', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
}));

app.use('/api/header/titles', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
}));

// SIMILAR ROUTES ===============

app.use('/api/descriptions', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
}));

app.use('/api/similars', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
}));

// REVIEW ROUTES ===============

app.use('/api/reviews/sort/:movie_id', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));

app.use('/api/reviews', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));

app.use('/api/reviews/:movie_id', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));

app.use('/api/movies/:movie_id', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
// console.log(path.join(__dirname + './public'));

