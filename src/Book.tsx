import React from "react"

export interface IBook {
  title: string
  author: string
}

const Book: React.FC<IBook> = ({ title, author }) => (
  <div>
    <h2>{title}</h2>
    <p>by {author}</p>
  </div>
)

export default Book
