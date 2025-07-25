import React, { useState } from 'react';
import { createTodo } from '../api';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        const response = await createTodo({ title });
        onAdd(response.data);
        setTitle('');
      } catch (error) {
        console.error("AddTodo failed:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;