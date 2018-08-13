/*
* Primary file for todo CLI
*/

// Dependencies
const fs = require('fs');
const yargs = require('yargs');
const todo = require('./todo');

const argv = yargs
.usage('$0 <cmd> [<args>]')
.command('add [title]', 'Add a new todo', {
    title: {
      describe: 'Title of todo',
      demand: true,
      alias: 't',
    },
})
.command('list', 'List all todos')
.command('remove', 'Remove a todo')
.help()
.argv;

// Read command and option
let command = argv._[0];
let option = argv.title;

// console.log(argv);

// Command Switch
switch (command) {
  case 'add':
    console.log('Adding new task.');
    const myTodo = todo.addTodo(option);
    if (myTodo) {
      console.log(`'${option}' successfuly added to your todo list.`);
    } else {
      console.log(`Adding todo failed!\n'${option}' already exists.`);
    }
    break;
  case 'list':
    console.log('Listing all todos.');
    todo.listTodos();
    break;
  case 'remove':
    console.log('Removing todo.');
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
