import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from './Pages/Home/Home';
import MyLists from './Pages/MyLists/MyLists';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/My-Lists" element={<MyLists />} />
      </Switch>
    </Router>
  );
}

export default App;
