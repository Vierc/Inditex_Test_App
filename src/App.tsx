import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;