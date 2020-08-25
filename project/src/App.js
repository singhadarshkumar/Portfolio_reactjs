import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Me } from "./components/Me";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { Navigation } from "./components/navbar";
import {Img} from './components/img/aks.jpeg';
import Pdf from "./components/cv/aks.pdf"
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Me" component={Me} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Resume" component={Resume} />
          <Img/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
