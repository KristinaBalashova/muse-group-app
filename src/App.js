import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Community from './components/Community/Community';

function App() {
  return (
    <>
      <Header />
      <main className="globalContainer">
        <Intro />
        <Products />
        <Community />
      </main>

      <Footer />
    </>
  );
}

export default App;
