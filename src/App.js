import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/mainSection/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
