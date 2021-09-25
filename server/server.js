const express = require('express');
const cors = require('cors');
const homemembersController = require('./routes/homemembers/homemembers-controller');
const todosController = require('./routes/todos/todos-controller');

const errorHandler = require('./errors/error-handler');

const server = express();

server.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
server.use(express.json());

server.use('/homemembers', homemembersController);
server.use('/todos', todosController);

server.use(errorHandler);

server.listen(3001, () => {
  console.log('Running on 3001');
});
