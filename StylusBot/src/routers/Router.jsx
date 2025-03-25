import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";

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
                    </Route>
                </Routes>
            </BrowserRouter> 
        </>
    )
}

export default Router