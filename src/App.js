import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { Redirect } from "@reach/router";
import Navbar from './main-page/Navbar';
import MainPage from './main-page/mainPage';
import LoginForm from './loginForm/LoginForm';
import AdminViewDocument from './admin/viewDocuments';
import UserUploadFile from './users/uploadFile';
import axios from './axios/axios';

const App = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const decodedToken = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post('/login', { token });
        setRole(response.data.role);
      } catch (error) {
        console.error(error);
      }
    };
    decodedToken();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {role === 'admin' ? (
        <Route exact path="/" render={() => <Redirect to="/admin" />} />
      ) : (
        <Route exact path="/" render={() => <Redirect to="/users" />} />
      )}
      <Route path="/admin" component={AdminViewDocument} />
      <Route path="/users" component={UserUploadFile} />
      <Route path="/login" component={LoginForm} />
      <Route path="/" element={<MainPage />} />
    </BrowserRouter>
  );
};

export default App;