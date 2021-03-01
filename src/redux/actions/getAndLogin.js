import point from '../../point.js'
import constants from '../constants'
import axios from "axios";
import {history} from "../../index";
// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
	if (!response.ok) throw new Error(errText)
	return response.json()
}
// функция вытаскивает из объекта ошибки строку
const errorHandler = (error) => (error.response ? error.response.data : error.message)

//Получение данных юзера
export const getData = (token) => (dispatch) => {
	dispatch({ type: constants.GET_DATA_LOADING })
	fetch(`${point}/api/auth/users/me/?`, {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`
		}
	})
		.then((response) => checkResponse(response, 'Ошибка'))
		.then((data) => {
			dispatch({ type: constants.GET_DATA_SUCCESS, payload: data })
		})
		.catch((error) => {
			dispatch({ type: constants.GET_DATA_FAILED, payload: errorHandler(error) })
		})
}

//Логин
export const login = (data) => (dispatch) => {
	dispatch({ type: constants.LOGIN_LOADING })
	fetch(`${point}/api/auth/users/login/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then((response) => response.json())
		.then((data) => {
			window.localStorage.setItem('token', data.token)
			typeof data.token=="undefined"
				? dispatch({ type: constants.LOGIN_FAILED })
				: dispatch({ type: constants.LOGIN_SUCCESS, payload: data.token })
		})
		.catch((err) => {
			dispatch({ type: constants.LOGIN_FAILED })
		})
}

export const auth = (data) => (dispatch) => {
	dispatch({ type: constants.AUTH_LOADING })
	fetch(`${point}/api/auth/users/registration/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then((response) => response.json())
		.then((data) => {
			dispatch({ type: constants.AUTH_SUCCESS })
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: constants.AUTH_FAILED })
		})
}

export const logout = () => (dispatch) => {
	dispatch({ type: constants.LOGOUT })
	window.localStorage.removeItem("token")
}

//Редактировать профил
export const updateProfile = (data) => (dispatch) => {
	const token = localStorage.getItem('token');
	const url = `${point}/api/auth/users/update/`
	axios.post(url, data,{headers: {Authorization: `Token ${token}`}} )
		.then(result => {
			dispatch({type: constants.UPDATE_PROFILE_SUCCESS, payload: data})
			history.push('/main')
		})
		.catch(error => {
			dispatch({type: constants.UPDATE_PROFILE_FAILED})
		})
}