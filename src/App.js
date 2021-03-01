import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Registration from './components/Registr/Registrationn'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getData, login, logout } from './redux/actions/index'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

const App = () => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.data.token)
	const loginSuccess = useSelector((state) => state.data.login.success)
	const getSuccess = useSelector((state) => state.data.get.success)
	React.useEffect(() => {
		dispatch(getData(window.localStorage.getItem('token') || token))
	}, [getData, window.localStorage.getItem('token'), login, token, logout])
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/auth" component={Registration} exact />
					<Route path="/main" component={Sidebar} exact />
					{(loginSuccess || getSuccess) && <Route path="/main" component={Sidebar} exact />}
					{(loginSuccess || getSuccess) && <Redirect to="/main" />}
					{!loginSuccess && <Route path="/login" component={Login} exact />}
					{!loginSuccess && <Redirect to="/login" />}
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
