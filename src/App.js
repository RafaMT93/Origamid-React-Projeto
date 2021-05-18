import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';

import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo';
import Footer from './Components/Footer';

import NotFound from './Components/NotFound';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
