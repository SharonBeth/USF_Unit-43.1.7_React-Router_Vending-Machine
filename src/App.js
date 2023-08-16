
import './App.css';

import MountainDew from "./MountainDew";
import Coke from "./Coke";
import Pepsi from "./Pepsi";
import NavBar from "./NavBar";
import Home2 from "./Home2";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>TEsting-in App componenet</p>
      <BrowserRouter>
          {/* <NavBar /> */}
          <Route exact path="/">
            <Home2 />
          </Route>
          <Route exact path="/mountaindew">
            <MountainDew />
          </Route>
          <Route exact path="/coke">
            <Coke />
          </Route>
          <Route exact path="/pepsi">
            <Pepsi />
          </Route>
    
      </BrowserRouter>
  </div>

  );
}

export default App;
