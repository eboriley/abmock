import React,{useEffect} from 'react'
import db from '../firebase'
import {actionTypes} from '../reducers/actionTypes'
import {useSelector, useDispatch} from 'react-redux'
function LogggedInTeacher() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect (() => {
        const docRef = db.collection("teacherlogin").doc(user?.user.email);

    docRef.get().then((doc) => {
        if (doc.exists) {
        console.log("Document data:", doc.data());
        dispatch({
            type: actionTypes.SET_TEACHER,
            teacherLogin: doc.data(),
        })
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
            }
            }).catch((error) => {
            console.log("Error getting document:", error);
        });

    
     }, [])
    return (
        <div>
            
        </div>
    )
}

export default LogggedInTeacher
