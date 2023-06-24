import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import EpisodeList from './components/EpisodeList';
import EpisodePlayer from './components/EpisodePlayer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} >
            <Route path="" element={<EpisodeList />} />
            <Route path="episode/:episodeId" element={<EpisodePlayer />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;