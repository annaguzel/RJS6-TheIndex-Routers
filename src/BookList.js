import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    query: ""
  };

  setQuery = query => {
    query = query.toLowerCase();
    this.setState({ query: query });
  };

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.props.books.filter(book =>
      book.title.toLowerCase().includes(this.state.query)
    );

    if (bookColor) {
      books = books.filter(book => book.color === bookColor);
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.setQuery} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
