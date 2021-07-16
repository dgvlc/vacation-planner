import { Route } from "react-router-dom"
import VacationPlace from "./components/VacationPlace"
import './App.css';
import Navbar from "./components/Navbar";
import VacationPlaceDetail from "./components/VacationPlaceDetail";
import AddPlace from "./components/AddPlace";
import SeasonSort from "./components/SeasonSort";
import TopPlaces from "./components/TopPlaces";

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
      <Route path="/season-sort">
        <SeasonSort />
      </Route>
      <Route path="/top-places">
        <TopPlaces />
      </Route>
    </div>
  );
}

export default App;
