import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/users.js';
import favoriteRouter from './routes/favorite.js';
import newsRouter from './routes/getNews.js';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/api.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express application
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/user', userRouter);
app.use('/favorite', favoriteRouter);
app.use('/api', apiRouter);
app.use('/getNews', newsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Catch 404 and forward to error handler 
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handler 
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;
