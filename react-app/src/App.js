import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container';
import NavBar from './components/NavBar/Navbar';
import Favorite from './components/Favorite/favorite';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/about';


const App = () => {
  return (
    <main>
    <NavBar/>
    <Container>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
    </Container>
    </main>
  );
};
export default App;
