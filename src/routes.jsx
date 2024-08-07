import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Projetos from './pages/Projetos/Projetos.jsx';
import Contatos from './pages/Contatos/Contatos.jsx';
import Page404 from './pages/Page404/Page404.jsx';
import PagBase from './pages/PagBase/PagBase.jsx';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PagBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="/*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
