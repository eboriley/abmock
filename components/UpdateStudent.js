import React, {useState, useEffect}  from 'react'
import {useParams} from "react-router-dom"
import db from '../firebase'
import styled from 'styled-components'
import './Students.css'
import {actionTypes} from '../reducers/actionTypes'
import {useSelector, useDispatch} from 'react-redux'

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


function UpdateStudent() {
    const {id} = useParams();
    const user = useSelector(state => state.user)
    const teacherLogin = useSelector(state => state.teacherLogin)
    const student = useSelector(state => state.student)
    const dispatch = useDispatch()

    const [stu, setStudent] = useState([])
    const [teacher, setTeacher] = useState([])
    const [name, setName] = useState(student?.student.name);
    const [maths, setMaths] = useState(student?.student.maths);
    const [eng, setEng] = useState(student?.student.eng);
    const [soc, setSoc] = useState(student?.student.soc);
    const [sci, setSci] = useState(student?.student.sci);
    const [ict, setIct] = useState(student?.student.ict);
    const [rme, setRme] = useState(student?.student.rme);
    const [twi, setTwi] = useState(student?.student.twi);
    const [bdt, setBdt] = useState(student?.student.bdt);

    const editStudent = (e) => {
        e.preventDefault();

            db.collection("students").doc(id).set({
            name: name,
            maths: maths,
            eng: eng,
            soc: soc,
            sci: sci,
            ict: ict,
            rme: rme,
            twi: twi,
            bdt: bdt
        }).then(() => {
            console.log("Document successfully written")
            alert("Records updated successfully")
        }).catch((error) => {
            console.log("Error writing document: ", error)
        })
        
    }


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

    useEffect (() => {
        db.collection('teachers').where("email", "==", user?.user.email).get()
        .then((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
               setTeacher(doc.data())
            })
        })
        .catch((error) => {
            console.log("Error getting document", error)
        })
    
     }, [])

    // console.log(student)
    // console.log(soc)
    // console.log(teacherLogin)
    // console.log(teacher)
  
    const newSubs = teacher.subjects

    console.log(newSubs)
    console.log(student)
    console.log(name, eng, sci)
    
   
    return (
        <div className="container-sm">
        <div className="form-group">
        {!name ? (<> </>) : (
        <form>
        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Student's full name</InputSpan>
        <InputItem className="InputItem"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" required
                    placeholder={stu.name}
                    disabled={true}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">English Language score</InputSpan>
        <InputItem className="InputItem"
                     type="text" required   
                   value={eng}
                   placeholder={stu.eng}
                    onChange={e => setEng(e.target.value)}
                    disabled={!newSubs?.includes("eng")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Mathematics score</InputSpan>
        <InputItem className="InputItem"
                    value={maths}
                    onChange={e => setMaths(e.target.value)}
                    type="text" required
                    placeholder={stu.maths}
                    disabled={!newSubs?.includes("maths")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Integrated Science score</InputSpan>
        <InputItem className="InputItem"
                    value={sci}
                    onChange={e => setSci(e.target.value)}
                    type="text" required
                    placeholder={stu.sci}
                    disabled={!newSubs?.includes("sci")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Social Studies score</InputSpan>
        <InputItem className="InputItem"
                    value={soc}
                    onChange={e => setSoc(e.target.value)}
                    type="text" required
                    placeholder={stu.soc}
                    disabled={!newSubs?.includes("soc")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Information and Communication Technology score</InputSpan>
        <InputItem className="InputItem"
                    value={ict}
                    onChange={e => setIct(e.target.value)}
                    type="text" required
                    placeholder={stu.ict}
                    disabled={!newSubs?.includes("ict")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Ghanaian Language score</InputSpan>
        <InputItem className="InputItem"
                    value={twi}
                    onChange={e => setTwi(e.target.value)}
                    type="text" required
                    placeholder={stu.twi}
                    disabled={!newSubs?.includes("twi")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Religious and Moral Education score</InputSpan>
        <InputItem className="InputItem"
                    value={rme}
                    onChange={e => setRme(e.target.value)}
                    type="text" required
                    placeholder={stu.rme}
                    disabled={!newSubs?.includes("rme")}
                    />
        </InputLabelIn>
        </InputLabel>

        <InputLabel className="InputLabel">
        <InputLabelIn className="InputLabelIn">
        <InputSpan className="InputSpan">Basic Design and Technology score</InputSpan>
        <InputItem className="InputItem"
                    value={bdt}
                    onChange={e => setBdt(e.target.value)}
                    type="text" required
                    placeholder={stu.bdt}
                    disabled={!newSubs?.includes("bdt")}
                    />
        </InputLabelIn>
        </InputLabel>

        <div className="form-group">
        <input type="submit" style={btnStyle} value="Update Score" className="btn btn-primary" onClick={editStudent}/>
        </div>
        </form>
         ) }
       </div> 
       </div>  
    )
}

export default UpdateStudent
