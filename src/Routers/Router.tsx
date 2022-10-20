import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/cadastro" element=""></Route>
                <Route path="/home" element=""></Route>
                <Route path="*" element={<h1>ERRO 404</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}