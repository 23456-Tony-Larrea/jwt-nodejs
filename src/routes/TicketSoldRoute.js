import { createTicketSold} from "../controllers/TicketSoldController.js";
import { Router } from "express";
import { upload } from "../middleware/multer.js";

const router = Router();
router.post("/ticketsSold", upload, createTicketSold);

export default router;