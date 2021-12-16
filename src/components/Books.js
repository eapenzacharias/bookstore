import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import AddBookForm from './AddBookForm';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.bookReducer);
  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </div>
      <AddBookForm />
    </>
  );
};

export default Books;
