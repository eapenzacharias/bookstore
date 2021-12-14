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
  return (
    <>
      <div className="form-container container">
        <h2>ADD NEW BOOK</h2>
        <form className="row g-3">
          <div className="col-md-7">
            <input type="text" className="form-control" placeholder="Book Title" id="bookTitle" />
          </div>
          <div className="col-md-3">
            <select id="bookCategory" className="form-select">
              <option selected>Category</option>
              {categories.map((item) => (
                <option key={item.id}>{item.name}</option>
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
