import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import './App.css';
import Appointments from "./components/Appointments";
import BookAppointment from "./components/BookAppointment";
import Home from "./components/Home";
import NewAppointment from "./components/NewAppointment";

function App() {
  return (
    <Router>
      <div className="App-home">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/appointment" component={Appointments}/>
          <Route path="/book-appointment" component={BookAppointment} />
          <Route path="/new-appointment" component={NewAppointment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
