import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './main-page/Navbar';
import MainPage from './main-page/mainPage';
import LoginForm from './loginForm/LoginForm';
import AdminViewDocument from './admin/viewDocuments';
import UserUploadFile from './users/uploadFile';

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
  
      <Routes>
        <Route path="/admin" element={<AdminViewDocument />} />
        <Route path="/users" element={<UserUploadFile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;




