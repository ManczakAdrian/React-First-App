import Hero from "../Hero/Hero";
import Lists from "../Lists/Lists";
import SearchForm from "../SearchForm/SearchForm";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm></SearchForm>
      <Lists />
    </>
  );
};

export default Home;