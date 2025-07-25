import React, { useState } from 'react';
import { signup } from '../api/Signup'; // Match the correct casing

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      await signup(email, password);
      setMessage('Signup success!');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setMessage('Signup failed.');
    }
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default SignUp;