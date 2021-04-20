import {actionTypes} from './actionTypes'

const userReducer = (state = null, action) => {
    switch (action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default userReducer