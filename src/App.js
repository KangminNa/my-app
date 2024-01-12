import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import CardEditorPage from './pages/CardEditorPage';
import CardWalletPage from './pages/CardWalletPage';
import LoginSignupPage from './pages/LoginSignupPage';
import './assets/styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/card-editor" element={<CardEditorPage />} />
        <Route path="/card-wallet" element={<CardWalletPage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
