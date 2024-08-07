import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Container from '../../components/Container/Container.jsx';

function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá, sou <br />
                            <span>Luan Reis</span> <br />
                            Dev Front-End
                        </p>
                        <Link to='/sobre' className={`${styles.btn} ${styles.btnRed}`}>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure>
                        <img className={styles.imgHome} src='/developer-red.svg' alt='Imagem da home' />
                    </figure>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Home; 
