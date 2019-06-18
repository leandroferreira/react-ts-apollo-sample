import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Book, { IBook, bookFragment } from "./Book"
import { BooksQuery } from "../lib/types/graphql/BooksQuery"

const books: IBook[] = [
  {
    __typename: "Book",
    title: "Book McBookface",
    author: "John Snow"
  }
]

const booksQuery = gql`
  query BooksQuery {
    books {
      ...Book
    }
  }
  ${bookFragment}
`

const BookList = () => (
  <>
    <h1>Books</h1>
    <Query<BooksQuery> query={booksQuery}>
      {({ data }) => {
        if (!data || !data.books) return "loading"

        return data.books.map(book => <Book key={book.title} {...book} />)
      }}
    </Query>
  </>
)

export default BookList
