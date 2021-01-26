const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { routes } = require('./src/routes');



//подключение к бд
mongoose.connect(
  'mongodb://localhost:27017/shop',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// инициализируем приложение
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach(item => {
  app.use(`/api/shop/${item}`, require(`./src/routes/${item}`))
});

//роуты
const PORT = process.env.PORT || 3000;
http.createServer({}, app).listen(PORT);
console.log(`Сервер запущен на порту: ${PORT}`);