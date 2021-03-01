import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { auth } from '../../redux/actions/index'

export default function Registration() {
	const dispatch = useDispatch()
	const authLoading = useSelector((state) => state.data.auth.loading)
	const authSuccess = useSelector((state) => state.data.auth.success)
	const authError = useSelector((state) => state.data.auth.failed)
	const [data, setData] = React.useState({
		first_name: '',
		last_name: '',
		email: '',
		username: '',
		city: 'Bishkek',
		address: '',
		phone: '',
		birthday: '',
		country: 'Kyrgyzstan',
		password: '',
		password2: '',
		gender: 'Male',
		state: 'KG'
	})
	const [valid, setValid] = React.useState(false)
	React.useEffect(() => {
		if (
			data.first_name.length > 1 &&
			data.last_name.length > 3 &&
			data.email.length > 5 &&
			data.username.length > 5 &&
			data.city.length > 3 &&
			data.phone.length > 9 &&
			data.birthday.length > 5 &&
			data.password.length > 8 &&
			data.address.length > 6 &&
			data.password2.length > 8 &&
			data.password === data.password2
		) {
			setValid(true)
		} else {
			setValid(false)
		}
	}, [
		data.first_name,
		data.last_name,
		data.username,
		data.email,
		data.city,
		data.phone,
		data.birthday,
		data.password,
		data.password2,
		data.address
	])











	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
					required
					value={data.first_name}
					onChange={(e) => setData({ ...data, first_name: e.target.value })}
					name="first_name"
					fullWidth
					label="Имя"
					autoComplete="given-name"
				/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={data.last_name}
						onChange={(e) => setData({ ...data, last_name: e.target.value })}
						name="last_name"
						label="Фамилия"
						fullWidth
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
						name="email"
						label="Почта"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={data.username}
						onChange={(e) => setData({ ...data, username: e.target.value })}
						name="username"
						label="Имя пользователя"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={data.address}
						onChange={(e) => setData({ ...data, address: e.target.value })}
						name="address"
						label="Адрес"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={data.phone}
						onChange={(e) => setData({ ...data, phone: e.target.value })}
						name="phone"
						label="Номер телефона"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={data.birthday}
						onChange={(e) => setData({ ...data, birthday: e.target.value })}
						name="birthday"
						label="Дата рождения"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						type="password"
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}
						name="birthday"
						label="Пароль"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						type="password"
						value={data.password2}
						onChange={(e) => setData({ ...data, password2: e.target.value })}
						name="birthday"
						label="Пароль еще раз"
						fullWidth
					/>
				</Grid>
			</Grid>
			<br />
			<Box pb={2}>
				<Button
					disabled={!valid}
					fullWidth
					onClick={() => {
						dispatch(auth(data))
						setData({
							first_name: '',
							last_name: '',
							email: '',
							username: '',
							city: 'Bishkek',
							address: '',
							phone: '',
							birthday: '',
							country: 'Kyrgyzstan',
							password: '',
							password2: '',
							gender: 'Male',
							state: 'KG'
						})
					}}
					variant="contained"
					color="primary"
					type="submit"
				>
					{authLoading ? 'Загрузка...' : 'Зарегистрироваться'}
				</Button>
				{authSuccess && (
					<div className="success-auth">
						Вы успешно зарегистрировались, перейдите на почту и подтвердите аккаунт
					</div>
				)}
				{authSuccess && (
					<NavLink className="success-link" to="/login">
						Войти после подтверждения
					</NavLink>
				)}
				{authError && <div className="success-error">Заполните формы заново</div>}
				{!authSuccess && (
					<NavLink className="login-link" to="/login">
						Уже есть аккаунт?
					</NavLink>
				)}
			</Box>
		</React.Fragment>
	)
}
