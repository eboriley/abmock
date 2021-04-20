import userReducer from './user'
import {combineReducers} from 'redux'
import teacherLoginReducer from './teacherLogin'
import studentReducer from './student'

const allReducers = combineReducers({
    user: userReducer,
    teacherLogin: teacherLoginReducer,
    student: studentReducer
})

export default allReducers