import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/k783zIkJS0moLfPdpOfQ/books/';

const initialState = [];

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
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
