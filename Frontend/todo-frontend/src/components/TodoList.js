import React, { useEffect, useState } from "react";
import { getTodos } from "../api";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAdd = (newTodo) => setTodos([newTodo, ...todos]);
  const handleUpdate = (updated) =>
    setTodos(todos.map(todo => (todo._id === updated._id ? updated : todo)));
  const handleDelete = (id) =>
    setTodos(todos.filter(todo => todo._id !== id));

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
