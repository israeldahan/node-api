
let BOOKS = [
    { id: 1, title: "Harry Potter and the Sorcerer's stone", author: "J.K. Rowling", date: "1997", score: 4.8 },
    { id: 2, title: "Jurassic Park", author: "Michael Crichton", date: "1990", score: 4.5 },
    { id: 3, title: "The Lord of the Rings", author: "J.R.R. Tolkien", date: "1954", score: 4.9 },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", date: "1937", score: 4.7 },
    { id: 5, title: "The Da Vinci Code", author: "Dan Brown", date: "2003", score: 4.6 },
    { id: 6, title: "Angels & Demons", author: "Dan Brown", date: "2000", score: 4.4 },
    { id: 7, title: "The Lost Symbol", author: "Dan Brown", date: "2009", score: 4.3 },
    { id: 8, title: "The Hunger Games", author: "Suzanne Collins", date: "2008", score: 4.6 },
    { id: 9, title: "Catching Fire", author: "Suzanne Collins", date: "2009", score: 4.7 },
    { id: 10, title: "Mockingjay", author: "Suzanne Collins", date: "2010", score: 4.5 },
    { id: 11, title: "The Martian", author: "Andy Weir", date: "2011", score: 4.7 },
    { id: 12, title: "Ready Player One", author: "Ernest Cline", date: "2011", score: 4.6 },
    { id: 13, title: "Armada", author: "Ernest Cline", date: "2015", score: 4.2 },
    { id: 14, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", date: "1979", score: 4.8 },
    { id: 15, title: "The Restaurant at the End of the Universe", author: "Douglas Adams", date: "1980", score: 4.6 },
    { id: 16, title: "Life, the Universe and Everything", author: "Douglas Adams", date: "1982", score: 4.6 },
    { id: 17, title: "So Long, and Thanks for All the Fish", author: "Douglas Adams", date: "1984", score: 4.5 },
    { id: 18, title: "Mostly Harmless", author: "Douglas Adams", date: "1992", score: 4.4 },
    { id: 19, title: "The Ultimate Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", date: "1996", score: 4.7 },
    { id: 20, title: "1984", author: "George Orwell", date: "1949", score: 4.8 },
    { id: 21, title: "To Kill a Mockingbird", author: "Harper Lee", date: "1960", score: 4.7 },
    { id: 22, title: "Pride and Prejudice", author: "Jane Austen", date: "1813", score: 4.6 },
    { id: 23, title: "The Great Gatsby", author: "F. Scott Fitzgerald", date: "1925", score: 4.7 },
    { id: 24, title: "Moby Dick", author: "Herman Melville", date: "1851", score: 4.4 },
    { id: 25, title: "The Catcher in the Rye", author: "J.D. Salinger", date: "1951", score: 4.3 },
    { id: 26, title: "Brave New World", author: "Aldous Huxley", date: "1932", score: 4.6 },
    { id: 27, title: "The Alchemist", author: "Paulo Coelho", date: "1988", score: 4.7 },
    { id: 28, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", date: "2011", score: 4.7 },
    { id: 29, title: "Becoming", author: "Michelle Obama", date: "2018", score: 4.9 },
    { id: 30, title: "Educated", author: "Tara Westover", date: "2018", score: 4.8 }
];

let ID = BOOKS.length;
let getNextID = () => {
    return ++ID;
}


const getAllBooks = (offset, limit) => {
    return BOOKS.slice(offset, offset + limit)
}

const getBookById = (id) => {
    return BOOKS.find(book => book.id === Number(id));
}

const getBookIndex = (book) => {
    return BOOKS.findIndex(book => book.id === Number(id));
}

let updateBook = (book) => {    
    const bookIndex = getBookIndex(book.id)
    const newAllBooks = [...BOOKS]
    newAllBooks[bookIndex] = book
    BOOKS = newAllBooks
}

const createBook = (book) => {
    book.id = getNextID();
    BOOKS.push(book);
}

const deleteBook = (id) => {
    const book = getBookById(id);
    if (!book) {
        return ;
    }
    const bookIndex = getBookIndex(book.id);
    const newAllBooks = [...BOOKS];
    newAllBooks.splice(bookIndex, 1);
    BOOKS = newAllBooks;
    return book;
}

export default {getAllBooks, getBookById, getBookIndex, updateBook, createBook, deleteBook}