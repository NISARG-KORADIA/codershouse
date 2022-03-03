require('dotenv').config();
const express = require('express');
const router = require('./routes');
const morgan = require('morgan');
const DBConnect = require('./database');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// corsOption is to handle multiple router request as we are making post requests to server 5500 where other requests are handled by react on frontend on port 3000.
const corsOption = {
  credentials: true,
  origin: ['http://localhost:3000']
}

const PORT = process.env.PORT || 5500;
DBConnect();
const app = express();

// We are storing users profile pictures in this folder.
app.use('/storage', express.static('storage'));
// cookie parser is required to attach cookie on response.
app.use(cookieParser());
app.use(cors(corsOption));
// Here we are increasing the limit of data that can be received in req body.
app.use(express.json({ limit: '8mb' }));
app.use(router);
// app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send("Server is working");
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

