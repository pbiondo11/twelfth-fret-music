import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Shop from './pages/Shop';
import TFMConnect from './pages/TFMConnect';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tfm-connect" element={<TFMConnect />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;