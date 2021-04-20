import React,{useState, useEffect} from 'react'
import db from '../firebase'
import StudentData from './StudentData'
import styled from 'styled-components'
import './Students.css'
import Table from 'react-bootstrap/Table'

const InputSpan = styled.span`
color: darkgray;
font-size: 14px;
margin-bottom: 5px;
text-align: left;
`;

const InputItem = styled.input`
border: none;
outline: none;
background: none;
font-size: 16px;
`;

const InputLabel = styled.label`
width: 100%;  
`;

const InputLabelIn = styled.label`
margin-top: 10px;
display: flex;
flex-direction: column;
padding:5px 10px;
border: 1px solid darkgray;
border-radius: 5px;
outline-width: 3px;
outline-offset: -2px;
background-color: #FFF;

`;

const btnStyle = {
    width: '100%'
}

function Students() {
    const [students, setStudents] = useState([])

    
    const [name, setName] = useState('');
    const [maths] = useState(0);
    const [eng] = useState(0);
    const [soc] = useState(0);
    const [sci] = useState(0);
    const [ict] = useState(0);
    const [rme] = useState(0);
    const [twi] = useState(0);
    const [bdt] = useState(0);
    
    const addStudent = (e) => {
        e.preventDefault();

        db.collection('students').add({
            name: name,
            maths: maths,
            eng: eng,
            soc: soc,
            sci: sci,
            ict: ict,
            rme: rme,
            twi: twi,
            bdt: bdt
        }).then((docRef) => {
            alert("Student Added with ID:", docRef.id);
        }).catch((error) => {
            alert("Error adding student:", error);
        })

        setName("")
    }


    useEffect(() => {
        const studentsReq = db.collection('students');
        studentsReq.onSnapshot((snapshot) => (
            setStudents(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        ))
    }, [])
    
    const student = students.map(st => ({id: st.id, name: st.data.name, eng: st.data.eng, maths: st.data.maths, sci: st.data.sci,
    soc: st.data.soc, ict: st.data.ict, rme: st.data.rme, bdt: st.data.bdt, twi: st.data.twi}))
    console.log(student)

    return (
        <div className="container-sm">
        <h3>Mock One</h3>
        <Table responsive="sm" >
        <thead >
            <th>Name</th>
            <th>Eng</th>
            <th>Math</th>
            <th>Sci</th>
            <th>ICT</th>
            <th>Soc</th>
            <th>BDT</th>
            <th>RME</th>
            <th>GhL</th>
        </thead>
        <tbody hover>
            {
                student.map(({id, name, eng, maths, sci, ict, soc, bdt, rme, twi}) => (
                        <StudentData
                        name={name}
                        eng = {eng}
                        maths = {maths}
                        sci = {sci}
                        ict = {ict}
                        soc = {soc}
                        rme = {rme}
                        bdt = {bdt}
                        twi = {twi}
                        id = {id}
                        />
                ))
            }
        </tbody>
        </Table>   
               <div className="form-group">
                <form>
                <InputLabel className="InputLabel">
                <InputLabelIn className="InputLabelIn">
                <InputSpan className="InputSpan">Student's full name</InputSpan>
                <InputItem className="InputItem"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" required
                            placeholder="e.g. John Wick"
                            disabled={true}
                            />
                </InputLabelIn>
                </InputLabel>
                <div className="form-group">
                <input type="submit" style={btnStyle} value="Add Student" className="btn btn-primary" disabled={true} onClick={addStudent}/>
                </div>
                </form>
               </div>     
        </div>
    )
}

export default Students
