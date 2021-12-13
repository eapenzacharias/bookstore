import '../styles/style.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Books from './Books';
import Categories from './Categories';

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
      <Navbar />
      <div data-testid="main">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
