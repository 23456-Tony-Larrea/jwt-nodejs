import { createTicketSold,getTicketSold,getTicketsNotSold,getTicketsSold,updateTicketStatus} from "../controllers/TicketSoldController.js";
import { Router } from "express";
import { upload } from "../middleware/multer.js";

const router = Router();
router.post("/ticketsSold", upload, createTicketSold);
router.get ('/ticketsSold',getTicketSold)
router.get('/ticketsNotSold',getTicketsNotSold)
router.get('/ticketsSoldTrue',getTicketsSold)
router.put('/ticketsSold/:id',updateTicketStatus)

export default router;