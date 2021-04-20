import React,{useState, useEffect} from 'react'
import db from '../firebase'
import ListGroup from 'react-bootstrap/ListGroup'
import {LinkContainer} from 'react-router-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {actionTypes} from '../reducers/actionTypes'


function Update() {
    const [students, setStudents] = useState([])
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const studentsReq = db.collection('students');
        studentsReq.onSnapshot((snapshot) => (
            setStudents(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        ))
    }, [])

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

    const student = students.map(st => ({id: st.id, name: st.data.name, eng: st.data.eng, maths: st.data.maths, sci: st.data.sci,
        soc: st.data.soc, ict: st.data.ict, rme: st.data.rme, bdt: st.data.bdt, twi: st.data.twi}))
        console.log(student)

    const studentList = student.map((st) =>
        <LinkContainer to={`/UpdateStudent/${st.id}`}>
          <ListGroup.Item>{st.name}</ListGroup.Item>  
        </LinkContainer>
    );
    
    return (
        <ListGroup>
        {studentList}
      </ListGroup>
    )
}

export default Update
