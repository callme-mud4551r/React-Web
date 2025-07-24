import React from "react";
import { updateTodo, deleteTodo } from "../api";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleToggle = async () => {
    const response = await updateTodo(todo._id, { completed: !todo.completed });
    onUpdate(response.data);
  };
  const handleDelete = async () => {
    await deleteTodo(todo._id);
    onDelete(todo._id);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
