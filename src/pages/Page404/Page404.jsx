import styles from './Page404.module.css';

function Page404() {
    return (
        <section className={styles.page404}>
            <h2 className={styles.tit2}>Algo de errado não está certo</h2>
            <div className={styles.txts}>
                <span className={styles.txtG}>404</span> <br/>
                <strong className={styles.txtRed}>Página não localizada</strong>
            </div>
        </section>
    );
}

export default Page404;
