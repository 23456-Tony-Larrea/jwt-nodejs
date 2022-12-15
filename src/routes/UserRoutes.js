import { Router } from "express";
import {getUser,getUserById,updateUser,deleteUser} from "../controllers/UserControllers.js";
import {verifyToken} from "../middleware/middleware.js";
const router = Router();

router.get("/users",verifyToken,getUser)
router.get("/users/:id",getUserById)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)
export default router;
