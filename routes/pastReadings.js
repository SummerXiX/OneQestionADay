import { Router } from "express";
import * as pastReadingsCtrl from "../controller/pastReadings.js";
import { isLoggedIn } from "../middleware/middleware.js";

export { router };

const router = Router();

router.get("/", isLoggedIn, pastReadingsCtrl.index)
router.delete("/:id", isLoggedIn, pastReadingsCtrl.delete);
router.get("/:id", isLoggedIn, pastReadingsCtrl.show);
router.put("/:id", isLoggedIn, pastReadingsCtrl.update)
router.get("/:id/edit", isLoggedIn, pastReadingsCtrl.edit);

