import { Container, Button, Paper, TextField } from '@mui/material'
import { containerStyled, paperStyled } from '../../shared/styles/Styles'
import { Link } from 'react-router-dom'

function Login() {
	return (
		<Container sx={containerStyled}>
			<Paper elevation={4} sx={paperStyled}>
				<header>
					<h2>Pagina de Login</h2>
				</header>
				<TextField type='text' label='E-mail' />
				<TextField type='password' label='Senha' />
				<Button>Entrar</Button>
				<footer>
					<p>
						Não possui uma conta?{' '}
						<Link to={'/Cadastro'}>Cadastre-se</Link>
					</p>
				</footer>
			</Paper>
		</Container>
	)
}

export default Login
