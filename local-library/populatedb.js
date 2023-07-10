/*const mongoose = require("mongoose");
const Author = require("./models/author");
const Genre = require("./models/genre");
const Book = require("./models/book");
const BookInstance = require("./models/bookinstance");

const mongoDB = "<Ihre MongoDB-URL>"; // Geben Sie hier Ihre MongoDB-URL ein
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

async function createAuthor(first_name, family_name, dob, dod) {
  const authorDetail = { first_name, family_name };
  if (dob) authorDetail.date_of_birth = dob;
  if (dod) authorDetail.date_of_death = dod;

  const author = new Author(authorDetail);

  try {
    await author.save();
    console.log("Author created: " + author);
  } catch (error) {
    console.log("Error creating author: " + error);
  }
}

async function createGenre(name) {
  const genre = new Genre({ name });

  try {
    await genre.save();
    console.log("Genre created: " + genre);
  } catch (error) {
    console.log("Error creating genre: " + error);
  }
}

async function createBook(title, summary, isbn, author, genre) {
  const book = new Book({
    title,
    summary,
    isbn,
    author,
    genre,
  });

  try {
    await book.save();
    console.log("Book created: " + book);
  } catch (error) {
    console.log("Error creating book: " + error);
  }
}

async function createBookInstance(book, imprint, status, due_back) {
  const bookInstance = new BookInstance({
    book,
    imprint,
    status,
    due_back,
  });

  try {
    await bookInstance.save();
    console.log("BookInstance created: " + bookInstance);
  } catch (error) {
    console.log("Error creating book instance: " + error);
  }
}

async function createData() {
  await createAuthor("John", "Doe", "1990-01-01", null);
  await createAuthor("Jane", "Smith", "1985-05-15", null);

  await createGenre("Fiction");
  await createGenre("Science Fiction");
  await createGenre("Mystery");

  await createBook(
    "Book Title 1",
    "Summary of Book Title 1",
    "123456789",
    authors[0],
    [genres[0]]
  );

  await createBook(
    "Book Title 2",
    "Summary of Book Title 2",
    "987654321",
    authors[1],
    [genres[1]]
  );

  await createBookInstance(books[0], "Imprint 1", "Available", null);
  await createBookInstance(books[0], "Imprint 2", "Loaned", new Date());
  await createBookInstance(books[1], "Imprint 3", "Maintenance", null);

  console.log("Data creation completed.");
}

createData();
*/