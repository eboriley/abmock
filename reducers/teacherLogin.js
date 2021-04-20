import {actionTypes} from './actionTypes'

const teacherLoginReducer = (state = null, action) => {
    switch (action.type){
        case actionTypes.SET_TEACHER:
            return{
                ...state,
                teacherLogin: action.teacherLogin
            }
        default:
            return state
    }
}

export default teacherLoginReducer