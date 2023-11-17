import booksService from "../services/books-service.js";
import fs from "fs";
let getAllBooks = (req, res) => {
  let limit = req.query.limit || 10;
  let offset = req.query.offset || 0;
  if (limit > 100) {
    limit = 100;
  }
  if (offset < 0) {
    offset = 0;
  }
  const books = booksService.getAllBooks(offset, limit);
  res.json(books);
};

let getBookById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Missing URL parameter: id");
  }
  const book = booksService.getBookById(id);
  if (!book) {
    res.status(404).send("Book not found");
  }
  res.json(book);
};

let createBook = (req, res) => {
  const book = req.body.book;
  if (!book) {
    res.status(400).send("Missing book data");
  }
  if (!book.title) {
    res.status(400).send("Missing book title");
  }
  if (!book.author) {
    res.status(400).send("Missing book author");
  }
  if (!book.date) {
    res.status(400).send("Missing book date");
  }
  if (!book.score) {
    res.status(400).send("Missing book score");
  }
  booksService.createBook(book);
  res.json(book);
};

let upsertBook = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Missing URL parameter: id");
  }
  const book = req.body.book;
  if (!book) {
    res.status(400).send("Missing book data");
  }
  if (!book.title) {
    res.status(400).send("Missing book title");
  }
  if (!book.author) {
    res.status(400).send("Missing book author");
  }
  if (!book.date) {
    res.status(400).send("Missing book date");
  }
  if (!book.score) {
    res.status(400).send("Missing book score");
  }
  const oldBook = booksService.getBookById(id);
  if (oldBook) {
    booksService.updateBook(id, book);
  } else {
    booksService.createBook(book);
  }
  res.json(book);
};

let modifyBook = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Missing URL parameter: id");
  }
  const book = booksService.getBookById(id);
  if (!book) {
    res.status(404).send("Book not found");
  }

  const { title, author, date, score } = req.body.book;
  const definedParams = {
    ...(title && { title }),
    ...(author && { author }),
    ...(date && { date }),
    ...(score && { score }),
  };
  const newBook = { ...book, ...definedParams };
  booksService.updateBook(id, newBook);
  res.json(newBook);
};

let deleteBook = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Missing URL parameter: id");
  }
  let book = booksService.deleteBook(id);
  if (!book) {
    res.status(404).send("Book not found");
  }
  res.json(book);
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  upsertBook,
  modifyBook,
  deleteBook,
};
