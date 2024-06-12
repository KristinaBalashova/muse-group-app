import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="globalContainer">
        <Intro />
        <Products />
      </main>

      <Footer />
    </>
  );
}

export default App;
