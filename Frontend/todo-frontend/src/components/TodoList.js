import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../api';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Fetching todos failed:", error);
    }
    setLoading(false);
  };

  const handleAdd = (newTodo) => setTodos([newTodo, ...todos]);
  const handleUpdate = (updated) =>
    setTodos(todos.map(todo => (todo._id === updated._id ? updated : todo)));
  const handleDelete = (id) =>
    setTodos(todos.filter(todo => todo._id !== id));

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        todos.length ? (
          todos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No todos yet.</p>
        )
      )}
    </div>
  );
};

export default TodoList;