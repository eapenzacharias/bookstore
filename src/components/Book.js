import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <div>
        <div className="book card">
          <div className="card-header">
            <h3>{title}</h3>
            {author}
          </div>
          <div className="card-body">
            <button type="button" className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
