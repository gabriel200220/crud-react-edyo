import { Login } from '@mui/icons-material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'


export default function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Cadastro" element={<Register/>}></Route>
                <Route path="/home" element=""></Route>
                <Route path="*" element={<h1>ERRO 404</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}