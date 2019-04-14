import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Viewer from "./Components/Viewer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" Component={Viewer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
