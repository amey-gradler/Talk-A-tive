const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const chats = require('./data/data');

const userRoutes = require('./routes/userRoutes');

const { notFound, errorHandler } = require('./Middleware/errorMiddleware');
const app = express();

app.use(express.json());

dotenv.config();
connectDB(process.env.MONGO_URI);
app.get('/', (req, res) => {
  res.send('API is running');
});

// app.get('/api/chat', (req, res) => {
//   res.send(chats);
// });

// app.get('/api/chat/:id', (req, res) => {
//   // console.log(req.params.id);

//   const chat = chats.find((c) => c._id === req.params.id);
//   res.send(chat);
// });

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.yellow.bold);
});
