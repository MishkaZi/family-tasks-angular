const connection = require('../connection-wrapper');

let ServerError = require('../../errors/server-error');
let ErrorType = require('../../errors/error-type');

const getTodos = async () => {
  try {
    let sql = `
    SELECT t.id, t.description, t.date, hm.name 
    FROM todos t
    INNER JOIN homemembers hm
    ON hm.id= t.homemember_id
    ORDER BY date ASC;
    `;

    const todos = await connection.execute(sql);
    return todos;
  } catch (error) {
    throw new ServerError(ErrorType.GET_TODOS_ERROR);
  }
};

const addTodo = async (newAssignment) => {
  try {
    let sql = `
    INSERT INTO todos (description, date, homemember_id) VALUES (?,?,?);
    `;
    const params = [
      newAssignment.description,
      newAssignment.date,
      newAssignment.homeMemberId,
    ];
    await connection.executeWithParameters(sql, params);

    return getTodos();
  } catch (error) {
    throw new ServerError(ErrorType.ADD_TODO_ERROR);
  }
};

const deleteTodo = async (id) => {
  let sql = `
  DELETE FROM todos t WHERE t.id= ?
  `;
  const params = [id];
  try {
    await connection.executeWithParameters(sql, params);
    return getTodos();
  } catch (error) {
    throw new ServerError(ErrorType.DELETE_TODO_ERROR);
  }
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
};
