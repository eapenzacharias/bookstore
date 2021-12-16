import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, category,
  } = props;

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
      <div>
        <div className="book card">
          <div className="card-body">
            <div className="col-lg-5">
              <h5>{category}</h5>
              <h3>{title}</h3>
              <div className="col-12">John Doe</div>
              <div className="btn-group">
                <button type="button" className="btn">Comments</button>
                <span className="line-2" />
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteBook(id)}
                >
                  Remove
                </button>
                <span className="line-2" />
                <button type="button" className="btn">Edit</button>
              </div>
            </div>
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
