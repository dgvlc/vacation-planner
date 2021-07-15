import { Route } from "react-router-dom"
import VacationPlace from "./components/VacationPlace"
import './App.css';
import Navbar from "./components/Navbar";
import VacationPlaceDetail from "./components/VacationPlaceDetail";
import AddPlace from "./components/AddPlace";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/">
        <VacationPlace />
      </Route>
      <Route path="/vacations/:id">
        <VacationPlaceDetail />
      </Route>
      <Route path="/new-trip">
        <AddPlace/>
      </Route>
    </div>
  );
}

export default App;
