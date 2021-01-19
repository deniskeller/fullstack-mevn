const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');

//подключение к бд
mongoose.connect(
  'mongodb://localhost:27017/mevnshop',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//инициализация приложения
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//роуты
const PORT = 3000;
http.createServer({}, app).listen(PORT);
console.log(`Сервер запущен на порту: ${PORT}`);