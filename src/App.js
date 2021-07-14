import { Route } from "react-router-dom"
import VacationPlace from "./components/VacationPlace"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route>
        Homepage
      </Route>
      <Route>
        <VacationPlace />
      </Route>
    </div>
  );
}

export default App;
