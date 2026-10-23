/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

const book1: Book = {
  isbn: "978-602-03-3160-7",
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  totalPages: 529,
  category: "Fiction",
  isAvailable: true
};

const book2: Book = {
  isbn: "978-0141439518",
  title: "Pride and Prejudice",
  author: "Jane Austen",
  totalPages: 432,
  category: "Classic Literature",
  isAvailable: false
};

const book3: Book = {
  isbn: "978-1449331818",
  title: "Learning TypeScript",
  author: "Josh Goldberg",
  totalPages: 310,
  category: "Programming",
  isAvailable: true
};

console.log("Book Data");
console.log(book1);
console.log(book2);
console.log(book3);
