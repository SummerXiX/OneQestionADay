import { Router } from "express";
import * as newReadingCtrl from "../controller/newReading.js";
import { isLoggedIn } from "../middleware/middleware.js";

export { router };

const router = Router();

router.get("/", isLoggedIn, newReadingCtrl.index);
router.get("/result", isLoggedIn, newReadingCtrl.index);
router.post("/result", isLoggedIn, newReadingCtrl.showResult);
router.post("/addComment", isLoggedIn, newReadingCtrl.addComment);
