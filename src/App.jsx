import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br/>
            <span>Luan Reis</span> <br/>
            Dev Front-End
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Imagem da home" />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App
