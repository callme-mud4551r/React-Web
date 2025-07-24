import React, { useState } from 'react';
import { signup } from '../api/signup'; // ✅ Update this path if needed

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Invalid email format.');
      return;
    }

    setLoading(true);
    try {
      await signup(email, password);
      setMessage('Signup success!');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setMessage('Signup failed. Try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Sign Up</h2>

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <button onClick={handleSignup} disabled={loading} style={{ width: '100%', padding: '10px' }}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>

      {message && (
        <p style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default SignUp;
