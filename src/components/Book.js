import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, category,
  } = props;

  console.log(props);

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
      <div>
        <div className="book card">
          <div className="card-header">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <h5>{category}</h5>
            <button type="button" className="btn btn-primary" onClick={() => deleteBook(id)}>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
