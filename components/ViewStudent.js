import React, {useState, useEffect}  from 'react'
import {useParams} from "react-router-dom"
import db from '../firebase'
import {actionTypes} from '../reducers/actionTypes'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const btnStyle = {
    width: '100%'
}

function ViewStudentData ({subject, score, grade, remark}){
return (
    <tr>
        <td>{subject}</td>
        <td>{score}</td>
        <td>{grade}</td>
        <td>{remark}</td>
    </tr>
)
}



function ViewStudent() {
    const [student, setStudent] = useState([])
    const user = useSelector(state => state.user)
    const {id} = useParams();
    const stu = useSelector(state => state.student)
    const dispatch = useDispatch()

    useEffect(() => {
        db.collection('students').doc(id)
        .onSnapshot((snapshot) => (
            setStudent(snapshot.data()),
            dispatch({
                type: actionTypes.SET_STUDENT,
                student: snapshot.data(),
            })
        ))
    }, [])

    // useEffect (() => {
    //     const docRef = db.collection("teacherlogin").doc(user?.user.email);

    // docRef.get().then((doc) => {
    //     if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //     dispatch({
    //         type: actionTypes.SET_TEACHER,
    //         teacherLogin: doc.data(),
    //     })
    //     } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //         }
    //         }).catch((error) => {
    //         console.log("Error getting document:", error);
    //     });

    
    //  }, [])
    // const stu = [{sub: "English Language", scr: student.eng, grade: 1},
    // {sub: "English Language", scr: student.eng, grade: 1},]
    console.log(student)
    const subjects = {eng:"English Language", maths: "Mathematics", sci: "Integrated Science",
                    soc: "Social Studies", ict: "Information and Communication Technology", twi: "Ghanaian Language",
                    bdt: "Basic Design and Technology", rme: "Religious and Moral Education"}
    console.log(stu)
    function gradeScore(scr) {
        if(scr >= 90 ) return "1"
        if(scr < 90 && scr >= 80) return "2"
        if(scr < 80 && scr >= 70) return "3"
        if(scr < 70 && scr >= 60) return "4"
        if(scr < 60 && scr >= 55) return "5"
        if(scr < 55 && scr >= 50) return "6"
        if(scr < 50 && scr >= 40) return "7"
        if(scr < 40 && scr >= 35) return "8"
        return "9"
    }
    function remarkScore(scr) {
        if(scr >= 90 ) return "HIGHEST"
        if(scr < 90 && scr >= 80) return "HIGHER"
        if(scr < 80 && scr >= 70) return "HIGH"
        if(scr < 70 && scr >= 60) return "HIGH AVERAGE"
        if(scr < 60 && scr >= 55) return "AVERAGE"
        if(scr < 55 && scr >= 50) return "LOW AVERAGE"
        if(scr < 50 && scr >= 40) return "LOW"
        if(scr < 40 && scr >= 35) return "LOWER"
        return "LOWEST"
    }

    const score = gradeScore(88)
    console.log(score);
    const studentData = [{subject: subjects.eng, score: student.eng, grade: gradeScore(student.eng), remark: remarkScore(student.eng)},
        {subject: subjects.maths, score: student.maths, grade: gradeScore(student.maths), remark: remarkScore(student.maths)},
        {subject: subjects.sci, score: student.sci, grade: gradeScore(student.sci), remark: remarkScore(student.sci)},
        {subject: subjects.soc, score: student.soc, grade: gradeScore(student.soc), remark: remarkScore(student.soc)},
        {subject: subjects.ict, score: student.ict, grade: gradeScore(student.ict), remark: remarkScore(student.ict)},
        {subject: subjects.rme, score: student.rme, grade: gradeScore(student.rme), remark: remarkScore(student.rme)},
        {subject: subjects.twi, score: student.twi, grade: gradeScore(student.twi), remark: remarkScore(student.twi)},
        {subject: subjects.bdt, score: student.bdt, grade: gradeScore(student.bdt), remark: remarkScore(student.bdt)},
    ]

    return (
        <div className="container-sm">
            <h3>{student.name}</h3>
            <table className="table">
            <thead className="thead-light">
            <th>Subject</th>
            <th>Score</th>
            <th>Grade</th>
            <th>Remark</th>
            </thead>
            <tbody>{
                studentData.map(({subject, score, grade, remark}) => (
                    <ViewStudentData
                    subject = {subject}
                    score = {score}
                    grade = {grade}
                    remark = {remark}
                    />
                ))  
            }
            </tbody>
            </table>
            
            <button style={btnStyle} className="btn btn-primary"  ><Link className="btn btn-primary" to={`/UpdateStudent/${id}`}>Update Score</Link></button>
        </div>
    )
}

export default ViewStudent
