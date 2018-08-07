/*
* Library for todo CLI
*/

/*
  JSON.stringify(obj) - JSON -> String
  JSON.parse(str) - String -> JSON
*/

// Dependencies
const fs = require('fs');

// Defining the db json file
const file = 'todo-db.json';

const fetchTodos = () => {
  try {
    const todoStr = fs.readFileSync(file);
    return  JSON.parse(todoStr);
  } catch (e) {
    return [];
  }
}

const saveTodos = (todos) => {
  fs.writeFileSync(file, JSON.stringify(todos));
}

const addTodo = (title) => {
  let todos = fetchTodos();

  const todo = {
    title,
    createdAt: new Date(),
  };

  const duplicateTodos = todos.filter((todo) => todo.title === title);

  if (duplicateTodos.length === 0) {
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }
};

const removeTodo = (title) => {
  let todos = fetchTodos();

  // will populate in filteredTodos the todos that does not match title
  const filteredTodos = todos.filter((todo) => todo.title !== title);

  saveTodos(filteredTodos);

  return todos.length !== filteredTodos.length;
};

const listTodos = () => {
  fetchTodos().forEach((todo) => {
    console.log(`* ${todo.title}`);
  });
}

module.exports = {
  addTodo,
  removeTodo,
  listTodos,
};
