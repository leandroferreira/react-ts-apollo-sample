import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import BookList from "./BookList"

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

const Index = () => (
  <ApolloProvider client={client}>
    <main>
      <BookList />
    </main>
  </ApolloProvider>
)

ReactDOM.render(<Index />, document.getElementById("main"))
