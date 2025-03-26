import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";
import Imoveis from "../pages/Imoveis"
import Leads from "../pages/Leads";
import Notificacoes from "../pages/Notificacoes";

function Router(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="painel/">
                        <Route index element={<Dashboard />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="imoveis" element={<Imoveis />} />
                        <Route path="leads" element={<Leads />} />
                        <Route path="notificacoes" element={<Notificacoes />} />
                    </Route>
                </Routes>
            </BrowserRouter> 
        </>
    )
}

export default Router