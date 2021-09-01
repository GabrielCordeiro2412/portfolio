
import './App.css';
import Header from './components/header/Header';
import Tecnologias from './components/tecnologias/Tecnologias'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Projetos from './components/projetos/Projetos'

function App() {
  return (
    <div className="container">
      <Header/>
      <About/>
      <Tecnologias/>
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
