import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </main>
    </HashRouter>
  );
}

export default App;
