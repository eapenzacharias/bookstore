import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Progress = () => {
  const percent = Math.floor(Math.random() * 100);
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="ko-progress-circle" data-progress={percent}>
            <div className="ko-circle">
              <div className="full ko-progress-circle__slice">
                <div className="ko-progress-circle__fill" />
              </div>
              <div className="ko-progress-circle__slice">
                <div className="ko-progress-circle__fill" />
                <div className="ko-progress-circle__fill ko-progress-circle__bar" />
              </div>
            </div>
            <div className="ko-progress-circle__overlay" />
          </div>
        </div>
        <div className="col-6">
          <div className="percent">{`${percent} %`}</div>
          <span className="completed">Completed</span>
        </div>
      </div>
    </>
  );
};

const Chapter = () => {
  const section = 'The Vanishing Glass';
  return (
    <>
      <div className="row align-items-center">
        <div className="col">
          <h5 className="c-chapter">CURRENT CHAPTER</h5>
          <h4 className="chapter">
            {section}
          </h4>
          <button type="button" className="btn btn-primary"> UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

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
        <div className="book container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="col">
                <h5>{`${category}`}</h5>
                <h2>{`${title}`}</h2>
                <div className="col-12 author">John Doe</div>
              </div>
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
            <div className="col-md-5 col-lg-3">
              <Progress />
            </div>
            <div className="col-md-1 col-lg-1 d-none d-md-block">
              <div className="line-1" />
            </div>
            <div className="col-md-6 col-lg-3">
              <Chapter />
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
