import express from "express";
import * as book from "../books/book";
import { authenticateUser } from "../users/user";

const router = express.Router();

router.get("/books", authenticateUser, book.getAllBooks);
router.post("/books", authenticateUser, book.addNewBook);
router.get("/books/title/:title", authenticateUser, book.getByTitle);
router.get("/books/author/:author", authenticateUser, book.getByAuthor);
router.get("/books/publisher/:publisher", authenticateUser, book.getByPublishingHouse);
router.get("/books/year/:year", authenticateUser, book.getByYear);
router.put("/books/:id", authenticateUser, book.updateBook);
router.delete("/books/:id", authenticateUser, book.deleteBook);

export default router;
