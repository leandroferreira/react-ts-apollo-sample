import React from "react"
import Book, { IBook } from "./Book"

const books: IBook[] = [
  {
    title: "Book McBookface",
    author: "John Snow"
  }
]

const BookList = () => (
  <>
    <h1>Books</h1>
    {books.map(book => (
      <Book key={book.title} {...book} />
    ))}
  </>
)

export default BookList
