import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Projetos from './pages/Projetos/Projetos.jsx';
import Contatos from './pages/Contatos/Contatos.jsx';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/projetos" element={ <Projetos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
