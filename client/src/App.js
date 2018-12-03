import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Taxpros from "./pages/Taxpros";
import Detail from "./pages/TaxproInfo";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Taxpros} />
      <Route exact path="/taxpros" component={Taxpros} />
      <Route exact path="/taxpros/:id" component={Detail} />
      <Route component={NoMatch} />
    </Switch>
  </div>
</Router>
);

export default App;

