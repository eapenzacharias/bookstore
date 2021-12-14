import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.bookReducer);
  console.log(books);
  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <AddBookForm />
    </>
  );
};

export default Books;
