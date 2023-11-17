import express from "express";

import booksController from "../controllers/books-controller.js";

const Router = express.Router();

Router.get("/", booksController.getAllBooks);
Router.get("/:id",  booksController.getBookById);
Router.post("/", booksController.createBook);
Router.put("/:id", booksController.upsertBook);
Router.patch("/:id", booksController.modifyBook);
Router.delete("/:id", booksController.deleteBook);    

export default Router;