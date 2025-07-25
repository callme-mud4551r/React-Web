import React from 'react';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Todo + AWS Auth</h1>
      <SignUp />
      <SignIn />
      <TodoList />
    </div>
  );
}

export default App;