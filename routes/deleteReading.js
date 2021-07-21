import { Router } from "express";
import * as deleteReadingCtrl from "../controller/deleteReading.js";
// import { isLoggedIn } from "../middleware/middleware.js";

export { router };

const router = Router();

router.delete("/", deleteReadingCtrl.index);
