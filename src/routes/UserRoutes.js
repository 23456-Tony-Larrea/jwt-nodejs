import { Router } from "express";
import {getUser,getUserById,updateUser,deleteUser} from "../controllers/UserControllers.js";
import {verifyToken,verifyRole} from "../middleware/middleware.js";
const router = Router();

router.get("/users",verifyToken,verifyRole,getUser)
router.get("/users/:id",getUserById)
router.put("/users/:id",verifyToken,verifyRole, updateUser)
router.delete("/users/:id",verifyToken,verifyRole, deleteUser)
export default router;
