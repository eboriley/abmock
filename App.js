import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Students from './components/Students'
import ViewStudent from './components/ViewStudent';
import NavBar from './components/NavBar';
import UpdateStudent from './components/UpdateStudent';
import Login from './components/Login';
import LogggedInTeacher from './components/LogggedInTeacher';
import LandingPage from './components/LandingPage';

function App() {
  const user = useSelector(state =>state.user)
  const teacherLogin = useSelector(state =>state.teacherLogin)
  return (
    <div className="App">
      {!user ? <></>: <LogggedInTeacher/>}
      <Router>
        {
          !user ? (<Login/>):(
            <>
            <NavBar/>
            <Switch>
            <Route exact path="/" component={LandingPage}/>  
            <Route exact path="/students" component={Students}/>
            <Route exact path="/viewstudent/:id" component={ViewStudent}/>
            {!teacherLogin ? (<p>loading ...... </p>): ( <Route exact path="/updatestudent/:id" component={UpdateStudent}/>)}
            </Switch>
            </>
          )
        }
     
      </Router>
    </div>
  );
}

export default App;
