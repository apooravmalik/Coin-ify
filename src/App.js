import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom'
import Market from './Market';
import ChooseUs from './ChooseUs';
import Join from './Join';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Market />
      <ChooseUs />
      <Join />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
