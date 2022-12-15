import express from 'express';
import UserRoutes from './routes/UserRoutes.js';
import LoginRegisterRoutes from './routes/LoginRegisterRoutes.js'

const app = express();
app.use(express.json());
app.use(UserRoutes);
app.use(LoginRegisterRoutes);
export default app;