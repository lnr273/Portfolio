import styles from './Home.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span>Luan Reis</span> <br />
                        Dev Front-End
                    </p>
                    <Link to='/sobre' className={styles.btnRed}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <figure>
                    <img className={styles.imgHome} src='/developer-red.svg' alt='Imagem da home' />
                </figure>
            </section>
            <Footer />
        </>
    );
}

export default Home; 
