import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  publisher: string;
}

const filePath = path.resolve(__dirname, "./books.json");

const readBooksFromFile = async (): Promise<Book[]> => {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

const writeBooksToFile = async (books: Book[]): Promise<void> => {
  const data = JSON.stringify(books, null, 2);
  console.log(data);
  await fs.writeFile(filePath, data, "utf8");
};

function getId(req: Request): string {
  return req.params.id;
}

function generateGUID(): string {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000000);
  return `${timestamp}-${randomNum}`;
}

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  res.send(books);
  console.log(books);
};

export const addNewBook = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const newBooks: Book[] = req.body;

  newBooks.forEach((newBook) => {
    newBook.id = generateGUID();
    books.push(newBook);
  });

  await writeBooksToFile(books);
  res.send(books);
};

export const getByTitle = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const title: string = req.params.title;
  const book = books.filter((b) => b.title === title);
  if (!book) {
    res.status(404).send();
  } else {
    res.send(book);
  }
};

export const getByAuthor = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const author: string = req.params.author;
  const book = books.filter((b) => b.author === author);
  if (!book) {
    res.status(404).send();
  } else {
    res.send(book);
  }
};

export const getByYear = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const year: number = parseInt(req.params.year);
  const book = books.filter((b: Book) => b.year === year);
  if (!book) {
    res.status(404).send();
  } else {
    res.send(book);
  }
};

export const getByPublishingHouse = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const publisher: string = req.params.publisher;
  const book = books.filter((b: Book) => b.publisher === publisher);
  console.log(book);
  if (!book) {
    res.status(404).send();
  } else {
    res.send(book);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const id: string = getId(req);
  const bookIndex = books.findIndex((b: Book) => b.id === id);

  if (bookIndex === -1) {
    res.status(404).send();
  } else {
    const updatedBook: Book = req.body;
    books[bookIndex] = updatedBook;
    await writeBooksToFile(books);
    res.send(updatedBook);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const id: string = getId(req);
  console.log(id);
  const filteredBooks = books.filter((b: Book) => b.id !== id);
  await writeBooksToFile(filteredBooks);
  res.status(200).send();
};
