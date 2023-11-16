import { Router } from "express";

import booksController from "../controllers/books-controller.js";

Router.get("/", (req, res) => {
    res.send("Hello World!");
    }
);


Router.get("/", booksController.getAllBooks);
Router.get("/:id", booksController.getBookById);
Router.post("/", booksController.createBook);
Router.put("/:id", booksController.upsertBook);
Router.patch("/:id", booksController.modifyBook);
Router.delete("/:id", booksController.deleteBook);    

export default Router;