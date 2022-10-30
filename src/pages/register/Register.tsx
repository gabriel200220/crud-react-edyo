import { Container, Button, Paper, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { User, Notes } from '../../shared/interfaces/Interfaces'
import {
	containerStyled,
	formStyled,
	paperStyled
} from '../../shared/styles/Styles'

function Register() {
	const userList = JSON.parse(
		localStorage.getItem('userList') || '[]'
	) as User[]

	const navigate = useNavigate()

	const onSubmit = (e: any) => {
		e.preventDefault()

		if (validateRegister(e)) {
			const user: User = {
				name: e.target.elements.name.value,
				email: e.target.elements.email.value,
				password: e.target.elements.password.value,
				notes: []
			}

			userList.push(user)

			localStorage.setItem('userList', JSON.stringify(userList))

			navigate('/')
		}
	}

	const validateRegister = (e: any) => {
		const emailAlreadyUsed = userList.find(
			(user) => user.email === e.target.elements.email.value
		)

		if (
			!e.target.elements.name.value ||
			!e.target.elements.email.value ||
			!e.target.elements.password.value ||
			!e.target.elements.repassword.value
		) {
			alert('Por favor, preencha todos os campos.')

			return false
		}

		if (emailAlreadyUsed) {
			alert('O e-mail informado já está sendo utilizado.')

			return false
		}

		if (
			e.target.elements.password.value !==
			e.target.elements.repassword.value
		) {
			alert('Senhas não coincidem.')

			return false
		}

		return true
	}

	return (
		<Container sx={containerStyled}>
			<Paper elevation={4} sx={paperStyled}>
				<header>
					<h2>Página de Cadastro</h2>
				</header>
				<form style={formStyled} onSubmit={onSubmit}>
					<TextField
						name='name'
						type='text'
						label='Nome'
						fullWidth={true}
					/>
					<TextField
						name='email'
						type='text'
						label='E-mail'
						fullWidth={true}
					/>
					<TextField
						name='password'
						type='password'
						label='Senha'
						fullWidth={true}
					/>
					<TextField
						name='repassword'
						type='password'
						label='Repita a senha'
						fullWidth={true}
					/>
					<Button type='submit' variant='outlined' fullWidth={true}>
						Cadastrar
					</Button>
				</form>
				<footer>
					<p>
						Já possui uma conta? <Link to={'/'}>Conecte-se!</Link>
					</p>
				</footer>
			</Paper>
		</Container>
	)
}

export default Register
