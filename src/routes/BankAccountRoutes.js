import { Router } from "express";
import {getBankAccount,createBankAccount} from "../controllers/BankAccountController.js";
const router = Router();
router.get("/bankAccount",getBankAccount)
router.post("/bankAccount", createBankAccount)

export default router;
