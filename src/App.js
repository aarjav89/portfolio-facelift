import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
