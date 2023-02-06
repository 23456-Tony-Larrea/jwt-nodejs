import {
  BrowserRouter,
  Route,
  Routes
  } from 'react-router-dom';
  import Navbar from './main-page/Navbar';
  import MainPage from './main-page/mainPage';
  import LoginForm from './loginForm/LoginForm';
  
  const App = () => (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Navbar />} />
  <Route path="/" element={<MainPage />} />
  <Route path="/login" element={<LoginForm />} />
  </Routes>
  </BrowserRouter>
  );
  
  export default App;