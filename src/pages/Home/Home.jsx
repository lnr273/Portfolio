import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
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
    );
}

export default Home; 
