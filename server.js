import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/users.js';
import favoriteRouter from './routes/favorite.js';
import newsRouter from './routes/news.js';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/api.js';


// Import other routers if needed
// import addFavorite from './routes/addFavorite.js';
// import removeFavorite from './routes/removeFavorite.js';
// import getFavorite from './routes/getFavorite.js';
// import updateUser from './routes/updateUser.js';

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express application
const app = express();

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(express.json());

app.use(cookieParser());

// Routes
app.use('/user', userRouter);
app.use('/favorite', favoriteRouter);
app.use('/api', apiRouter);

// News routes
app.use('/news', newsRouter);


// Catch all other routes
app.use('/' , (req, res) => {
  res.send("Hello World");
});


// Catch 404 and forward to error handler (optional, but recommended)
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handler (optional, but recommended)
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


console.log("Server started");

export default app;
