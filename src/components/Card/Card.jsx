/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Card({ name, description, url}) {

    if (description === null) {
        description = 'Acesse o repositório para saber mais...'
    }

    if (description.length > 100) {
        description = description.substring(0, 100).concat("...")
    }

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.cardFooter}>
                <div className={styles.icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <Link to={url} className={styles.btn}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    );
}

export default Card;
