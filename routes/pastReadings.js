import { Router } from "express";
import * as pastReadingsCtrl from "../controller/pastReadings.js";
import { isLoggedIn } from "../middleware/middleware.js";

export { router };

const router = Router();

router.get("/", isLoggedIn, pastReadingsCtrl.index); 
