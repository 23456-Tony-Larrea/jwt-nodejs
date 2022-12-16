import { Router } from "express";
import {getBankAccount,createBankAccount,getBankAccountById,updateBankAccount} from "../controllers/BankAccountController.js";
const router = Router();
router.get("/bankAccount",getBankAccount)
router.post("/bankAccount", createBankAccount)
router.get("/bankAccount/:id",getBankAccountById)
router.put("/bankAccount/:id",updateBankAccount)
export default router;
