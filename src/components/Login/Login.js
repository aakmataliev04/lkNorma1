import React from 'react'
import { login } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import './login.css'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
	const dispatch = useDispatch()
	const error = useSelector((state) => state.data.login.failed)
	const loading = useSelector((state) => state.data.login.loading)
	const [data, setData] = React.useState({ email: '', password: '' })
	const [valid, setValid] = React.useState(false)
	React.useEffect(() => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (
			data.email.length &&
			data.password.length &&
			re.test(String(data.email).toLowerCase()) &&
			data.password.length > 7
		) {
			setValid(true)
		} else {
			setValid(false)
		}
	}, [data.email, data.password])
	const handleKeypress = (e) => {
		if (e.keyCode === 13 && valid) {
			dispatch(login(data))
		}
	}
	return (
		<div className="login-body">
			<Card className="login-container">
				<Box>
					<h1 className="login-title">Войти</h1>
				</Box>
				<Box pt={2} pb={2}>
					<TextField
						value={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
						onKeyUp={handleKeypress}
						variant="outlined"
						margin="normal"
						name="login"
						fullWidth
						label="Почта"
					/>
					<TextField
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}
						onKeyUp={handleKeypress}
						name="password"
						variant="outlined"
						margin="normal"
						fullWidth
						label="Пароль"
						type="password"
					/>
				</Box>
				<Box pb={2}>
					<Button
						disabled={!valid}
						onClick={() => {
							dispatch(login(data))
							setData({...data,email: '', password: '' })
						}}
						variant="contained"
						color="primary"
						type="submit"
					>
						{loading?"Загрузка...":"Войти"}
					</Button>
					<div className="auth-link">
						<NavLink to="/auth">Хотите зарегистрироваться?</NavLink>
					</div>
					{error && <div className="login_error">Неправильный логин или пароль</div>}
				</Box>
			</Card>
		</div>
	)
}
export default Login
