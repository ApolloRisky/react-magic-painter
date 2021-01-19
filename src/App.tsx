import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import ContactInfo from "./pages/ContactInfo";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/contact'>
        <ContactInfo />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
