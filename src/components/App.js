import '../styles/style.scss';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Popover } from 'bootstrap';
import Navbar from './Navbar';
import Books from './Books';
import Categories from './Categories';
import store from '../redux/configureStore';

const App = () => {
  const NotMatch = () => (
    <>
      <div>
        No Match Found for the page
      </div>
    </>
  );

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="container" data-testid="main">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
};

export default App;
