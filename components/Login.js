import React from 'react'
import {auth, provider} from '../firebase'
import {actionTypes} from '../reducers/actionTypes'
import {useDispatch} from 'react-redux'


function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className="container-sm">
            <h1>Mock tracker</h1>
            <p>developed by eboriley</p>
            <button type="button" className="btn btn-primary" onClick={signIn}>SignIn with Google</button>
        </div>
    )
}

export default Login
