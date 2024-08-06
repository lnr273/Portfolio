import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            Feito com ❣️ por Luan Reis &copy; {new Date().getFullYear()}
        </footer>
    );
}

export default Footer;
