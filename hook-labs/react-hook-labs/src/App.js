import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list.component';
import TodoForm from './components/todo-form/todo-form.component';
function App() {  
  const [todoList, setTodoList] = useState(() =>{
    const initialTodoList = JSON.parse(localStorage.getItem('todo_list')) || [];
    return initialTodoList;
  });

  function handleTodoClick(todo){    
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem('todo_list', JSON.stringify(newTodoList));
  }

  function handleTodoFormSubmit(formValues) {
    // add new todo to current todo list
    const newTodo = {
      id : todoList.length + 1,
      ...formValues
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    localStorage.setItem('todo_list', JSON.stringify(newTodoList));
  }

  function handleTodoFormSubmit(formValues) {
    // add new todo to current todo list
    const newTodo = {
      id : todoList.length + 1,
      ...formValues
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    localStorage.setItem('todo_list', JSON.stringify(newTodoList));
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>React hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      </header>
    </div>
  );
}

export default App;
