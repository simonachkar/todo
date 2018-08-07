/*
* Primary file for todo CLI
*/

// Dependencies
const fs = require('fs');
const todo = require('./todo');

// Read command and option
let command = process.argv[2];
let option = process.argv[3];

// Command Switch
switch (command) {
  case 'add':
    console.log('Adding new task.');
    console.log('----------------');
    const myTodo = todo.addTodo(option);
    if (myTodo) {
      console.log(`'${option}' successfuly added to your todo list.`);
    } else {
      console.log(`Adding todo failed!\n'${option}' already exists.`);
    }
    break;
  case 'list':
    console.log('Listing all todos.');
    console.log('------------------');
    todo.listTodos();
    break;
  case 'remove':
    console.log('Removing todo.');
    console.log('--------------');
    const removed = todo.removeTodo(option);
    if (removed) {
      console.log(`'${option}' successfuly removed from your todo list.`);
    } else {
      console.log(`Removing task failed!\n'${option}' is not found.`);
    }
    break;
  default:
    console.log('Command not recongnized.');
}
