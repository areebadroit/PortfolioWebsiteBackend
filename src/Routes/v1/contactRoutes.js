import express from "express";
import contactController from "../../Controllers/contactController.js";
const router = express.Router();
router.get("/", (req, res) => {
  console.log(req);
  res.send("good");
});
router.post("/", contactController.createContact);
export default router;
