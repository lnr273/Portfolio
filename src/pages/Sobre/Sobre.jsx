import styles from './Sobre.module.css';
import avatar from './images/prof-pic.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <figure>
                    <img src={avatar} alt="Avatar" className={styles.avatar}/>
                </figure>
                <div className={styles.txt}>
                    <h2>Sobre</h2>

                    <p>
                        Sou <span>Luan Reis</span> <br/>
                        <strong>Dev Front-End</strong>
                    </p>

                    <p>Esse ano comecei a estudar programação de forma autodidata.</p>
                    
                    <p>Sou apaixonado em transformar ideias em realidade digital.</p>

                    <p>
                        Especializado em criação de aplicações dinâmicas e intuitivas, <br/>
                        com foco na experiência do usuário.
                    </p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="html" />
                    <img src={css} alt="css" />
                    <img src={js} alt="js" />
                    <img src={react} alt="react" />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
