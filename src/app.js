import express from 'express';
import UserRoutes from './routes/UserRoutes.js';
import LoginRegisterRoutes from './routes/LoginRegisterRoutes.js'
import TiketsRoutes from './routes/TiketsRoutes.js';
import BankAccountRoutes from './routes/BankAccountRoutes.js';
import TicketSoldRoutes from './routes/TicketSoldRoute.js';

const app = express();
app.use(express.json());
app.use(UserRoutes);
app.use(LoginRegisterRoutes);
app.use(TiketsRoutes);
app.use(BankAccountRoutes);
app.use(TicketSoldRoutes);
export default app;