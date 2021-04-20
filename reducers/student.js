import {actionTypes} from './actionTypes'

const studentReducer = (state = null, action) => {
    switch (action.type){
        case actionTypes.SET_STUDENT:
            return{
                ...state,
                student: action.student
            }
        default:
            return state
    }
}

export default studentReducer