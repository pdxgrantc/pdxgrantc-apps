import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
