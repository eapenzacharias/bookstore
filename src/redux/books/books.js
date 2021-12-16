import axios from 'axios';

const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/k783zIkJS0moLfPdpOfQ/books/';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  const result = await axios.get(url);
  const books = result.data;
  console.log(books);
  const allBooks = Object.entries(books);
  const fetchedBooks = [];
  allBooks.forEach(([key, value]) => {
    const id = key;
    const { title } = value[0];
    const { category } = value[0];
    fetchedBooks.push({ id, title, category });
  });
  dispatch({
    type: GET_BOOKS,
    fetchedBooks,
  });
};

export const addBook = ({ id, title, category }) => async (dispatch) => {
  const result = await axios.post(url, {
    item_id: id,
    title,
    category,
  });
  if (result.data === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book: { id, title, category },
    });
  }
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.fetchedBooks];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
