const express = require('express');
const todosLogic = require('./todos-logic');

const router = express.Router();

//Get all todos
router.get('/', async (req, res, next) => {
  try {
    const todos = await todosLogic.getTodos();
    res.json(todos);
  } catch (error) {
    return next(error);
  }
});

//Add Todo
router.post('/', async (req, res, next) => {
  try {
    const newTodo = req.body;
    const todos = await todosLogic.addTodo(newTodo);
    res.json(todos);
  } catch (error) {
    return next(error);
  }
});

//Delete Todo
router.delete('/:id', async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const todos = await todosLogic.deleteTodo(todoId);
    res.json(todos);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
