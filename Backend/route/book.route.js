import express from "express";

import { getBooks } from "../controller/book.constoller.js";

const router = express.Router();

router.get("/", getBooks);

export default router;
