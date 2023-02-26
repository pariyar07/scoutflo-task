import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
