import React from "react"
import ReactDOM from "react-dom"
import BookList from "./BookList"

const Index = () => (
  <main>
    <BookList />
  </main>
)

ReactDOM.render(<Index />, document.getElementById("main"))
