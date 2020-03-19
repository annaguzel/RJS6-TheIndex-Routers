import React, { Component } from "react";

import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    query: ""
  };
  setQuery = query => {
    query = query.toLowerCase();
    this.setState({ query });
  };

  render() {
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(this.state.query)
    );

    const bookColor = this.props.match.params.bookColor;
    if (bookColor)
      filteredBooks = filteredBooks.filter(book => book.color === bookColor);
    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.setQuery} />
        <div className="row">
          <BookTable books={filteredBooks} />
        </div>
      </div>
    );
  }
}

export default BookList;