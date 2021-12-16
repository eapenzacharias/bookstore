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
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: id(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <div className="form-container row">
        <h2>ADD NEW BOOK</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value={title}
              placeholder="Book Title"
              id="bookTitle"
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <select
              id="bookCategory"
              className="form-select"
              placeholder="Category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="" disabled hidden>Category</option>
              {categories.map((item) => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary col-12">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
