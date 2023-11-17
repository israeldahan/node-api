import express from 'express';
import booksRouter from './routers/books-router.js';
const app = express();
import serverLog from './middlewares/serverLog.js';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(serverLog);
app.use(express.static('public'));
app.use("/books", serverLog, booksRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
    }
);``