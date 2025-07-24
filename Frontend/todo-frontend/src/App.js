import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isSignUp, setIsSignUp] = useState(true);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Signup successful! Please sign in.');
        setIsSignUp(false);
      } else {
        setMessage(data.error || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setMessage('Signup failed. Try again.');
    }
  };

  const handleSignin = async () => {
    try {
      const user = await signIn({ username: form.email, password: form.password });
      console.log('Login successful:', user);
      setMessage('Login successful!');
    } catch (err) {
      console.error('Login error:', err);
      setMessage('Login failed');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

      {isSignUp && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <button
        onClick={isSignUp ? handleSignup : handleSignin}
        style={{ padding: '10px 20px', width: '100%' }}
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>

      <p
        style={{ marginTop: '10px', cursor: 'pointer', color: 'blue' }}
        onClick={() => {
          setIsSignUp(!isSignUp);
          setMessage('');
        }}
      >
        {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
      </p>

      {message && (
        <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>
      )}
    </div>
  );
}

export default App;
