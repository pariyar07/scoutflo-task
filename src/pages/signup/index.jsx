import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleUser = (field) => {
    return (e) => {
      setUser({ ...user, [field]: e.target.value });
    };
  };

  const handleSignup = () => {
    if (user.name === '' || user.email === '' || user.password === '') {
      alert('Please enter details');
      return;
    }
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );
    navigate('/');
  };

  return (
    <div className="page">
      <div>
        <h1>Signup</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={handleUser('name')}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={handleUser('email')}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={handleUser('password')}
            />
          </div>
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
      <a href="/login">
        <button>Go to Login</button>
      </a>
    </div>
  );
}

export default SignupPage;
