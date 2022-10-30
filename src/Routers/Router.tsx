import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

export default function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />}></Route>
				<Route path='/cadastro' element={<Register />}></Route>
				<Route path='/home' element=''></Route>
			</Routes>
		</BrowserRouter>
	)
}
