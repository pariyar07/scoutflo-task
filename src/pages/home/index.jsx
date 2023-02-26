import { useState } from 'react';
import logo from '../../assets/scoutflo-logo.svg';

const Homepage = () => {
  const [loggedInUser, setLogginInUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLogginInUser(null);
  };

  return (
    <>
      {!loggedInUser ? (
        <div className="home">
          <Logo />
          <div className="register">
            <a href="/login">
              {' '}
              <button>Login</button>
            </a>
            <span>or</span>
            <a href="/signup">
              {' '}
              <button>Signup</button>
            </a>
          </div>
        </div>
      ) : (
        <div className="home">
          <Logo />
          <div className="message">
            <span>Hi {loggedInUser.name.split(' ')[0]}!</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Scoutflo logo" />
    </div>
  );
};

export default Homepage;
