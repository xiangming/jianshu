import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import UserRouter from './user/router';
import PostRouter from './post/router';

const app = express();
dotenv.config({
  path: path.resolve(__dirname, '.env'),
  silent: true,
});

// App Setup
app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', UserRouter);
app.use('/posts', PostRouter);

app.use((err, req, res, next) => {
  res.status(422).json(err.message);
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern';
const PORT = process.env.PORT || 8000;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
