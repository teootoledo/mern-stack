import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Navigation />

        <div className="container p-4">
          <Route path="/" exact component={NotesList} />
          <Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
