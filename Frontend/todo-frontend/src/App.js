import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchTodos()
      .then(res => setTodos(res.data))
      .catch(err => console.error('Error fetching todos:', err));
  }, []);

  const handleAddTodo = () => {
    if (!newTitle.trim()) return;
    createTodo(newTitle)
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
    setNewTitle('');
  };

  const toggleComplete = (id, completed) => {
    updateTodo(id, { completed: !completed })
      .then(res => setTodos(todos.map(todo => (todo.id === id ? res.data : todo))))
      .catch(err => console.error(err));
  };

  const removeTodo = (id) => {
    deleteTodo(id)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleComplete(todo.id, todo.completed)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
