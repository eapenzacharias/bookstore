import AddBookForm from './AddBookForm';
import Book from './Book';

const Books = () => {
  const books = [
    {
      id: 1,
      author: 'John Doe',
      title: 'Lorem Ipsum.',
    },
    {
      id: 2,
      author: 'Jane Doe',
      title: 'Dolor Sit Amet',
    },
  ];
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
