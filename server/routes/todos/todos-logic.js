const todosDao = require('./todos-dao');

const getTodos = async () => {
  return await todosDao.getTodos();
};

const addTodo = async (newAssignment) => {
  return await todosDao.addTodo(newAssignment);
};

const deleteTodo = async (id) => {
  return await todosDao.deleteTodo(id);
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
};
