import Header from '../../components/Header/Header.jsx'
import Container from '../../components/Container/Container.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

function PagBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}

export default PagBase;
