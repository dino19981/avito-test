import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './pages/News/News';
import NewsLink from './pages/NewsLink/NewsLink';

function App() {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/news" element={<NewsLink />} />
    </Routes>
  );
}

export default App;
