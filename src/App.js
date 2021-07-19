import { Route } from "react-router-dom"
import VacationPlace from "./components/VacationPlace"
import "./App.css";
import Navbar from "./components/Navbar";
import VacationPlaceDetail from "./components/VacationPlaceDetail";
import AddPlace from "./components/AddPlace";
import TopPlaces from "./components/TopPlaces";
import SeasonSort from "./components/SeasonSort";
import Footer from "./components/Footer";

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
      <Footer/>
    </div>
  );
}

export default App;
