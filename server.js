import express from 'express';
import booksRouter from './routers/books-router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", booksRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
    }
);``