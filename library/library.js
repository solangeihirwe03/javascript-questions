function Book(title, author) {
  this.title = title;
  this.author = author;
  this.available = true;

  this.toString = function() {
    return `${this.title} by ${this.author} (${this.available ? 'Available' : 'Borrowed'})`;
  }
}

function Library() {
  this.books = [];

  // Define functions for adding, displaying, borrowing, and returning books
  this.addBook = function(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    console.log(`${title} by ${author} has been added to the library.`);
  }

  this.displayAvailableBooks = function() {
    const availableBooks = this.books.filter(book => book.available);
    if (availableBooks.length === 0) {
      console.log("There are no books available in the library currently.");
      return;
    }
    console.log("Available Books:");
    availableBooks.forEach(book => console.log(book.toString()));
  }

  this.borrowBook = function(title) {
    const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book && book.available) {
      book.available = false;
      console.log(`${title} has been borrowed successfully.`);
    } else {
      console.log(`Sorry, ${title} is currently unavailable.`);
    }
  }

  this.returnBook = function(title) {
    const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book && !book.available) {
      book.available = true;
      console.log(`${title} has been returned successfully.`);
    } else {
      console.log(`Sorry, ${title} is not currently borrowed from the library.`);
    }
  }
}

const library = new Library();

library.addBook("The Lord of the Rings", "J.R.R. Tolkien");
library.addBook("Pride and Prejudice", "Jane Austen");
library.addBook("To Kill a Mockingbird", "Harper Lee");

library.displayAvailableBooks();

library.borrowBook("The Lord of the Rings");
library.borrowBook("The Hitchhiker's Guide to the Galaxy"); 

library.displayAvailableBooks();


library.returnBook("The Lord of the Rings");
library.returnBook("Pride and Prejudice"); 


library.displayAvailableBooks();