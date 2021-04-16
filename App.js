import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Students from './components/Students'
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div className="App">
      <h3>abmock</h3>
      <Router>
      <Switch>
      <Route exact path="/students" component={Students}/>
      <Route exact path="/viewstudent/:id" component={ViewStudent}/>
      </Switch>
      </Router>
      <script src="/__/firebase/8.4.1/firebase-app.js"></script>
    
    
    <script src="/__/firebase/8.4.1/firebase-analytics.js"></script>
    
    
    <script src="/__/firebase/init.js"></script>
    </div>
  );
}

export default App;
