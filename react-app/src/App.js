
import Container from './components/Container/Container';
import NavBar from './components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Favorite from './components/Favorite/Favorite';


const App = () => {
  return (
    <main>
    <NavBar/>
    <Container>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Container>
    </main>
  );
};
export default App;
