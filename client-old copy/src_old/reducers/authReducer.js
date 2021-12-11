import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS
} from '../constants/actionTypes'

const initialState = {
    authError: null
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return{...state, authError: null}
        case SIGNUP_ERROR:
            return{...state, authError: action.err.message}
        case LOGIN_SUCCESS:
            return{...state, authError: null}
        case LOGIN_ERROR:
            return{...state, authError: 'Login failed!'}
        case LOGOUT_SUCCESS:
            return state;
        default: 
            return state;
    }
}

export default authReducer;