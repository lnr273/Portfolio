import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useState } from 'react';

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <Link to='/'>
                <span>luanReis.dev</span>
            </Link>
            <nav 
                className={`${styles.menuSandwich} ${showMenu? styles.show : ''}`}
                onClick={toggleMenu}
            >
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/projetos'>Projetos</Link>
                <Link to='/contatos'>Contatos</Link>
            </nav>
            <div 
                className={styles.menuBtn}
                onClick={toggleMenu}    
            >
                <span className={styles.row}></span>
                <span className={styles.row}></span>
                <span className={styles.row}></span>
            </div>
        </header>
    );
}

export default Header;
