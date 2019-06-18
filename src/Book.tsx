import React from "react"
import gql from "graphql-tag"
import { Book as IBook } from "../lib/types/graphql/Book"

export type IBook = IBook

export const bookFragment = gql`
  fragment Book on Book {
    author
    title
  }
`

const Book: React.FC<IBook> = ({ title, author }) => (
  <div>
    <h2>{title}</h2>
    <p>by {author}</p>
  </div>
)

export default Book
