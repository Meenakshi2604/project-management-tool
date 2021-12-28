import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signin from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/layout/navbar';
import CreateProject from "./components/project/createProject";
import ProjectDetails from "./components/project/projectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/create-project" component={CreateProject} />
      </Switch>
      </div>
    </Router>
  ); 
}

export default App;
