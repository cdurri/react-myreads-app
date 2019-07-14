import React from 'react';
import PropTypes from 'prop-types';
import BookShelves from './BookShelves';
import OpenSearch from './OpenSearch';

const BooksList = ({ shelves, shelfkeys, books, shelfupdate }) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <BookShelves shelves={shelves} shelfkeys={shelfkeys} books={books} shelfupdate={shelfupdate} />
    <OpenSearch />
  </div>
)

BooksList.propTypes = {
  shelves: PropTypes.array.isRequired,
  shelfkeys: PropTypes.array.isRequired,
  books: PropTypes.object.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksList;
