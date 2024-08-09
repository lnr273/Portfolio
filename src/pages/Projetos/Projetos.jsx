import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card.jsx';
import styles from './Projetos.module.css';

function Projetos() {

    const [ repos, setRepos ] = useState([])

    useEffect(() => {
        const searchRepos = async () => {
            const response = await fetch('https://api.github.com/users/lnr273/repos?page=1&per_page=50')
            const data = await response.json()
            setRepos(data)
        }
        searchRepos()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repos.length > 0 ? (
                    <section className={styles.list}>
                        {
                            repos.map(({ name, description, html_url, id}) => {
                                return <Card 
                                            key={id}
                                            name={name} 
                                            description={description} 
                                            url={html_url} 
                                        />
                            })
                        }
                    </section>
                ) : (
                    <p>Carregando repos</p>
                )
            }
        </section>
    );
}

export default Projetos;