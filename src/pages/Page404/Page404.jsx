import styles from './Page404.module.css';
import Header from '../../components/Header/Header.jsx'
import Container from '../../components/Container/Container.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Page404() {
    return (
        <>
            <Header />
            <Container>
                <h2 className={styles.tit2}>Algo de errado não está certo</h2>
                <div className={styles.txts}>
                    <span className={styles.txtG}>404</span> <br/>
                    <strong className={styles.txtRed}>Página não localizada</strong>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Page404;
