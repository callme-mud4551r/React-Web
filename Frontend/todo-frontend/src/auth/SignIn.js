// src/auth/SignIn.js
import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth'; // ✅ Correct import

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const user = await signIn({ username: email, password });
      console.log('Sign-in success:', user);
      alert('Sign-In Success');
    } catch (err) {
      console.error('Sign-In Error:', err);
      alert(`Sign-In Failed: ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn} disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </div>
  );
}

export default SignIn;
