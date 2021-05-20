import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import './App.css';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {

    const [load, upadateLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            upadateLoad(false);
        }, 1200);
    }, []);


  return (
      <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>


            <Navbar />
          <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
            </Switch>
            <Footer />

          </div>
      </Router>
  );
}

export default App;
