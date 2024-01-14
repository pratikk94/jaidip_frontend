import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* other routes */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
