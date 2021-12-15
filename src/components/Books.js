import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <AddBookForm />
    </>
  );
};

export default Books;
