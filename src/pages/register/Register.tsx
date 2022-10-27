import { Container, Button, Paper, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { containerStyled, paperStyled } from '../../shared/styles/Styles'

function Register() {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [reSenha, setReSenha] = useState('')

	setInterval(() => {
		console.log(nome)
	}, 1000)

	return (
		<Container sx={containerStyled}>
			<Paper elevation={4} sx={paperStyled}>
				<header>
					<h2>Página de Cadastro</h2>
				</header>
				<TextField
					type='text'
					placeholder='Digite seu nome'
					onChange={(e) => setNome(e.target.value)}
					value={nome}
				/>
				<TextField
					type='text'
					placeholder='Digite seu e-mail'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<TextField
					type='password'
					placeholder='Digite sua senha'
					onChange={(e) => setSenha(e.target.value)}
					value={senha}
				/>
				<TextField
					type='password'
					placeholder='Digite sua senha'
					onChange={(e) => setResenha(e.target.value)}
					value={reSenha}
				/>
				<Button>Cadastrar</Button>
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
