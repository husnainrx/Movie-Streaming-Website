import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import '../styles/main.css'; // Main application-wide styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout pageTitle="Movie Stream"><Home /></Layout>} />
        <Route path="/about" element={<Layout pageTitle="About Us"><About /></Layout>} />
        <Route path="/registration" element={<Layout pageTitle="Registration"><Registration /></Layout>} />
        <Route path="/contact" element={<Layout pageTitle="Contact Us"><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
