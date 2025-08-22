import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main/Main';
import Question from './component/Main/Question';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route
          path="*"
          element={<h1 className="text-center text-2xl">Page Not Found</h1>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
