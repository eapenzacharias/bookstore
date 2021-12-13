import '../styles/style.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Books from './Book';
import Categories from './Categories';

const App = () => {
  const NotMatch = () => (
    <>
      <div>
        NotMatch
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container" data-testid="main">
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
