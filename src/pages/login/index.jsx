import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [user, setUser] = useState({
    username: '',
    userpassword: '',
  });
  const navigate = useNavigate();

  let savedUser;

  const checkUser = (field) => {
    return (e) => {
      setUser({ ...user, [field]: e.target.value });
    };
  };

  function handleLogin(e) {
    e.preventDefault();
    if (user.username === '' || user.userpassword === '') {
      alert('Please enter details');
      return;
    }
    if (!savedUser) {
      savedUser = JSON.parse(localStorage.getItem('user'));
    }

    if (savedUser) {
      const { name: name, password: password } = savedUser;
      name === user.username && password === user.userpassword
        ? navigate('/')
        : alert('User not found. Please sign up first.');
    } else alert('User not found. Please sign up first.');
  }

  return (
    <div className="page">
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={user.username}
              onChange={checkUser('username')}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={user.userpassword}
              onChange={checkUser('userpassword')}
            />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
      <a href="/signup">
        <button>Go to Signup</button>
      </a>
    </div>
  );
}

export default LoginPage;
