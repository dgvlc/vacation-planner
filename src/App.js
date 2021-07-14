import { Route } from "react-router-dom"
import VacationPlace from "./components/VacationPlace"
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/'>
        Homepage
      </Route>
      <Route>
        <VacationPlace />
      </Route>
    </div>
  );
}

export default App;
