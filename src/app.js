import express from 'express';
import UserRoutes from './routes/UserRoutes.js';
import LoginRegisterRoutes from './routes/LoginRegisterRoutes.js'
import TiketsRoutes from './routes/TiketsRoutes.js';
import BankAccountRoutes from './routes/BankAccountRoutes.js';
import cors from 'cors';
import TicketSoldRoutes from './routes/TicketSoldRoute.js';
import pdfImage from 'pdf-image';
import path from 'path';
import fs from 'fs';
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(LoginRegisterRoutes);
app.use(TiketsRoutes);
app.use(BankAccountRoutes);
app.use(TicketSoldRoutes);
// Ruta para obtener las imágenes de un PDF
app.get('/pdf-to-images/:pdfName', (req, res) => {
    const pdfPath = path.join(__dirname, 'public', 'uploads', req.params.pdfName);
    
    // Crea una instancia de PDFImage con la ruta del PDF
    const pdfImageGenerator = new pdfImage(pdfPath);
  
    // Genera una imagen por cada página del PDF
    pdfImageGenerator.convertFile().then((imagePaths) => {
      const images = [];
  
      // Lee cada imagen y la convierte en base64
      imagePaths.forEach((imagePath) => {
        const image = {
          name: path.basename(imagePath),
          data: Buffer.from(fs.readFileSync(imagePath)).toString('base64')
        };
        images.push(image);
      });
  
      // Envía las imágenes al cliente
      res.json(images);
    });
  });

export default app;