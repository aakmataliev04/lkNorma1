import constants from '../constants'

const initialState = {
    userData: {},
    get: {
        success: false,
        loading: false,
        failed: false
    },
    login: {
        success: false,
        loading: false,
        failed: false
    },
    auth: {
        success: false,
        loading: false,
        failed: false
    },
    updateProfile: {
        success: false,
        loading: false,
        failed: false
    },
    token: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_DATA_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                get: {
                    success: true,
                    loading: false,
                    failed: false
                }
            }
        case constants.GET_DATA_LOADING:
            return {
                ...state,
                get: {
                    success: false,
                    loading: true,
                    failed: false
                }
            }
        case constants.GET_DATA_FAILED:
            return {
                ...state,
                get: {
                    success: false,
                    loading: false,
                    failed: true
                }
            }
        case constants.LOGIN_FAILED:
            return {
                ...state,
                login: {
                    success: false,
                    loading: false,
                    failed: true
                }
            }
        case constants.LOGIN_LOADING:
            return {
                ...state,
                login: {
                    success: false,
                    loading: true,
                    failed: false
                }
            }
        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                login: {
                    success: true,
                    loading: false,
                    failed: false
                }
            }
        case constants.LOGOUT:
            return {
                ...state,
                userData: {},
                get: {
                    success: false,
                    loading: false,
                    failed: false
                },
                login: {
                    success: false,
                    loading: false,
                    failed: false
                },
                token: ''
            }
        case constants.AUTH_LOADING:
            return {
                ...state,
                auth: {
                    success: false,
                    loading: true,
                    failed: false
                }
            }
        case constants.AUTH_SUCCESS:
            return {
                ...state,
                auth: {
                    success: true,
                    loading: false,
                    failed: false
                }
            }
        case constants.AUTH_FAILED:
            return {
                ...state,
                auth: {
                    success: false,
                    loading: false,
                    failed: true
                }
            }
        case constants.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                updateProfile: {
                    success: true,
                    loading: false,
                    failed: false
                }
            }
        case constants.UPDATE_PROFILE_FAILED:
            return {
                ...state,
                updateProfile: {
                    success: false,
                    loading: false,
                    failed: true
                }
            }
        default:
            return state
    }
}

export default reducer
