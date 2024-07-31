// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import connectDatabase from './config/database'
// import authRoutes from './routes/authRoutes'
// import taskRoutes from './routes/taskRoutes'

// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// connectDatabase()

// app.use(cors())
// app.use(express.json())

// app.use('/api/auth', authRoutes)
// app.use('/api/tasks', taskRoutes)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/database';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDatabase();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});