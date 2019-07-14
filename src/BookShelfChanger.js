import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ books, shelfupdate }) => (
  <div className="book-shelf-changer">
    <select onChange={(event) => shelfupdate(books, event.target.value)} >
      <option value="move" disabled selected >Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

BookShelfChanger.propTypes = {
  books: PropTypes.object.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BookShelfChanger;
