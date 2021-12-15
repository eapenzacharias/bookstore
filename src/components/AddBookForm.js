import React, { useState } from 'react';
import { v4 as id } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const categories = [
    {
      id: 1,
      name: 'Action and Adventure',
    },
    {
      id: 2,
      name: 'Classics',
    },
    {
      id: 3,
      name: 'Comic Book',
    },
    {
      id: 4,
      name: 'Detective and Mystery',
    },
    {
      id: 5,
      name: 'Fantasy',
    },
  ];
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: id(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Category');
  };

  return (
    <>
      <div className="form-container container">
        <h2>ADD NEW BOOK</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-5">
            <input type="text" className="form-control" value={title} placeholder="Book Title" id="bookTitle" onChange={handleTitleChange} required />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" value={author} placeholder="Book Title" id="authorTitle" onChange={handleAuthorChange} required />
          </div>
          <div className="col-md-2">
            <select
              id="bookCategory"
              className="form-select"
              placeholder="Category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option>Category</option>
              {categories.map((item) => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary col">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
